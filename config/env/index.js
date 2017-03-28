import dotenv from 'dotenv';
dotenv.load();

const env = process.env.NODE_ENV || 'dev';
const config = require(`./${env}`);

export default config;