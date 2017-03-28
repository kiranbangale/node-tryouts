import app from '../../app';
import config from '../../config/config';
import express from 'express';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';

const route = express.Router();

route.use(bodyParser.urlencoded({ extended: true }));

// Models
const User = require('../user/user');

// Middlewares
const auth = require('../middlewares/auth');

route.post('/', (req, res) => {
    User.findOne({
        name: req.body.name,
    }, (err, user) => {

        if (err) throw err;

        if (!user) {
            res.json({ success: false, message: 'Authentication failed. User not found.' });
        } else {
            if (user.password != req.body.password) {
                res.json({ success: false, message: 'Authentication failed. Wrong password.' });
            } else {

                // Create a token
                var token = jwt.sign(user, config.secret, {
                  expiresIn: 60*60*24 // expires in 24 hours
                });

                // return the information including token as JSON
                res.json({
                  success: true,
                  message: 'Enjoy your token!',
                  token: token
                });
            }
        }

    });
});

route.get('/', auth, (req, res) => {
  res.json({
    token: req.decoded
  });
});

module.exports = route;
