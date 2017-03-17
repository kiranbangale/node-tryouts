const express = require('express');
const app = express();
const db = require('./db');

const UserController = require('../app/user/userController');
app.use('/users', UserController);

module.exports = app;
