import config from '../config.json';

const currentEnv = config[process.env.NODE_ENV || 'development'];

export default currentEnv;
