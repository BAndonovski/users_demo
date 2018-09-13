import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import cors from 'koa2-cors';
import Database from 'better-sqlite3';
import jwt from 'jsonwebtoken';

const app = new Koa();
const router = new Router();
const jwtSecret = 'its_a_secret';

app.use(cors({
  origin: '*',
}));
app.use(bodyParser({
  enableTypes: ['json'],
}));

app.use(async (ctx, next) => {
  let ok = ctx.request.path === '/login' || ctx.request.path === '/register';
  if (!ok && ctx.header.authorization !== undefined) {
    ok = jwt.verify(ctx.header.authorization, jwtSecret).isAdmin;
  }
  if (!ok) {
    ctx.throw(401);
  }
  await next();
});

const db = new Database('./users.db');
db.exec(`
  create table if not exists users (
    id integer primary key,
    email text not null unique,
    name text not null,
    surname text not null,
    password text not null,
    isAdmin integer not null
  )
  `);
db.exec('insert or replace into users(email,name,surname,password,isAdmin) values("admin@admin.com", "admin", "admin", "21232f297a57a5a743894a0e4a801fc3", 1)');

router.post('/login', async (ctx, next) => {
  const user = db.prepare('select * from users where email=@email and password=@password')
    .get({
      email: ctx.request.body.email,
      password: ctx.request.body.password,
    });

  if (user !== undefined) {
    ctx.status = 200;
    ctx.body = jwt.sign({
      id: user.id,
      email: user.email,
      isAdmin: user.isAdmin,
    }, jwtSecret);
  } else {
    ctx.status = 401;
  }

  await next();
});

router.post('/register', async (ctx, next) => {
  db.prepare('insert into users(email,name,surname,password,isAdmin) values(@email, @name, @surname, @password, @isAdmin)')
    .run({
      email: ctx.request.body.email,
      name: ctx.request.body.name,
      surname: ctx.request.body.surname,
      password: ctx.request.body.password,
      isAdmin: 0,
    });
  ctx.status = 200;
  await next();
});

router.get('/users', async (ctx, next) => {
  const {
    page, name, surname, isAdmin,
  } = ctx.request.query;
  let query = 'select * from users  where 1 = 1';
  let countq = 'select count(*) from users where 1 = 1';

  if (isAdmin !== undefined) {
    query += ' and isAdmin=@isAdmin';
    countq += ' and isAdmin=@isAdmin';
  }

  if (surname !== undefined) {
    query += ' and surname=@surname';
    countq += ' and surname=@surname';
  }

  if (name !== undefined) {
    query += ' and name=@name';
    countq += ' and name=@name';
  }

  query += ' order by name';

  if (page !== undefined) {
    query += ` limit ${page * 20},20`;
  }

  const count = db.prepare(countq).get({
    isAdmin, surname, name,
  })['count(*)'];

  const data = db.prepare(query).all({
    isAdmin, surname, name,
  });

  ctx.body = { count, data };
  ctx.status = 200;
  await next();
});

router.post('/user', async (ctx, next) => {
  db.prepare('insert into users(email,name,surname,password,isAdmin) values(@email, @name, @surname, @password, @isAdmin)')
    .run({
      email: ctx.request.body.email,
      name: ctx.request.body.name,
      surname: ctx.request.body.surname,
      password: ctx.request.body.password,
      isAdmin: ctx.request.body.isAdmin,
    });
  ctx.status = 200;
  await next();
});

router.get('/user/:id', async (ctx, next) => {
  ctx.body = db.prepare('select * from users where id=?').get(ctx.params.id);
  ctx.status = 200;
  await next();
});

router.put('/user/:id', async (ctx, next) => {
  db.prepare('update users set email=@email, name=@name, surname=@surname, password=@password, isAdmin=@isAdmin where id=@id')
    .run({
      id: ctx.params.id,
      email: ctx.request.body.email,
      name: ctx.request.body.name,
      surname: ctx.request.body.surname,
      password: ctx.request.body.password,
      isAdmin: ctx.request.body.isAdmin,
    });
  ctx.status = 200;
  await next();
});

router.delete('/user/:id', async (ctx, next) => {
  db.prepare('delete from users where id=?').run(ctx.params.id);
  ctx.status = 200;
  await next();
});

app.use(router.routes(), router.allowedMethods());
app.listen(3000);
