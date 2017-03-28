import app from './app';
// import app from './config/express';
import config from './config/config';
import mongoose from 'mongoose';
import morgan from 'morgan';
import bodyParser from 'body-parser';


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


// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.send(`Hello World! Port: ${config.port}`);
});


// Create server
app.listen(config.port);
console.log(`Express server running on port: ${config.port}`);

// For unit testing
export default app;
