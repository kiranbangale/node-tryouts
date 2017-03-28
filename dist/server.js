'use strict';

var app = require('./app');
var config = require('./config/config');
var mongoose = require('mongoose');
// const fs = require('fs');
var morgan = require('morgan');
var bodyParser = require('body-parser');

// use morgan to log requests to the console
app.use(morgan('dev'));

// Establish DB connection
mongoose.connect(config.database);

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('Hello! The API is at http://localhost:' + config.port + '/api');
});

// Create server
app.listen(config.port);
console.log('Express server running on port: ' + config.port);
//# sourceMappingURL=server.js.map