import app from './app';
import config from './config/config';
import mongoose from 'mongoose';
import morgan from 'morgan';
import bodyParser from 'body-parser';

// use morgan to log requests to the console
app.use(morgan('dev'));

// Establish DB connection
mongoose.connect(config.database);

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.send(`Hello World! Port: ${config.port}`);
});

// Create server
app.listen(config.port);
console.log(`Express server running on port: ${config.port}`);
