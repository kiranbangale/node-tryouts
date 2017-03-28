import mongoose from 'mongoose';
import morgan from 'morgan';
import app from './config/express';
import config from './config/env';


// use morgan to log requests to the console
app.use(morgan('dev'));


// Establish DB connection
mongoose.connect(config.database);

mongoose.connection.on('err', () => {
  throw new Error(`unable to connect to database: ${config.database}`);
});

mongoose.connection.on('connected', () => {
  console.log(`Connected to database: ${config.database}`);
});

if (config.env === 'dev') {
  mongoose.set('debug', true);
}


// Create server
app.listen(config.port);
console.log(`Express server running on port: ${config.port}(${config.env})`);


// For unit testing
export default app;
