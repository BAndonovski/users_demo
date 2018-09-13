The project is split into two: api & front.

#### API
The api creates a local sqlite 3 database (in file users.db) and creates a default admin user (e-mail admin@admin.com, password admin)

It exposes API for login, register, listing (with filtering & paging) users, as well as basic CRUD.
It's done with node & koa.

Authentication is handled through JWT.

#### Front
The front is developed with react, redux & material UI, bootstrapped by CRA.
The back end's location is set up in config.json

#### Development
ESLint is set up for both projects

#### Starting
Before starting, run `npm i` on both projects, so that node_modules are installed.  
Run back first. It will be served on `localhost:3000`  
Running front second will be served on `localhost:3001`



