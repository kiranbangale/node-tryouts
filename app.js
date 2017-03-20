const express = require('express');
const app = express();

const UserController = require('./app/user/userController');
app.use('/users', UserController);

module.exports = app;
