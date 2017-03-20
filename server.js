const app = require('./app');
const config = require('./config/config');
const mongoose = require('mongoose');
const fs = require('fs');
const morgan = require('morgan');

// use morgan to log requests to the console
app.use(morgan('combined'));
console.log('hi');

// Establish DB connection
mongoose.connect(config.database); 

// Create server
app.listen(process.env.PORT, () => {
    console.log(`Express server running on port: ${config.port}`);
});
