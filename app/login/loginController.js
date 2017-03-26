const app = require('../../app');
const config = require('../../config/config');
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jwt    = require('jsonwebtoken');

router.use(bodyParser.urlencoded({ extended: true }));

const User = require('../user/user');

router.post('/', (req, res) => {
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

router.use((req, res, nxt) => {
  
  const token = req.body.token || req.query.token || req.headers['x-access-token'];

  if(token) {
    jwt.verify(token, config.secret, (err, decoded) {
      if(err) {
        return res.json({ success: false, message: 'Failed to authenticate token.'});
      } else {
        req.decoded = decoded;
        nxt();
      }
    })
  } else {
    return res.status(403).send({
      success: false,
      message: 'Token not provided.'
    });
  }

});

app.use('/api', router);

module.exports = router;
