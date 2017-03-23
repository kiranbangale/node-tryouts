const app = require('../../app');
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jwt    = require('jsonwebtoken');

router.use(bodyParser.urlencoded({ extended: true }));

const User = require('../user/user');

router.post('/login', (req, res) => {
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
                var token = jwt.sign(user, app.get('superSecret'), {
                  expiresInMinutes: 1440 // expires in 24 hours
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


module.exports = router;
