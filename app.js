const express = require('express');
const app = express();
const UserController = require('./app/user/userController');
const LoginController = require('./app/login/loginController');

app.use('/login', LoginController);
app.use('/users', UserController);

module.exports = app;
