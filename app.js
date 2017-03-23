const express = require('express');
const app = express();
const UserController = require('./app/user/userController');
const LoginController = require('./app/login/loginController');

app.use('/users', UserController);
app.use('/login', LoginController);

module.exports = app;
