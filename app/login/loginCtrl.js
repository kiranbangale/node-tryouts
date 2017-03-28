import jwt from 'jsonwebtoken';
import config from '../../config/env';
import User from '../users/userModel';

function authenticate(req, res, nxt) {

  User.findOne({
      username: req.body.username
    })
    .exec()
    .then((user) => {
      if (!user) return nxt();
      user.comparePassword(req.body.password, (err, isMatch) => {
        if (err) return nxt(err);
        if (isMatch) {
          req.user = user;
          nxt();
        } else {
          return nxt();
        }
      });
    }, (err) => nxt(err));

}

function generateToken(req, res, nxt) {

  if (!req.user) return nxt();

  const jwtPayload = {
    id: req.user._id
  };
  const jwtData = {
    expiresIn: config.jwtDuration,
  };
  const secret = config.jwtSecret;
  req.token = jwt.sign(jwtPayload, secret, jwtData);

  nxt();

}

function respondJWT(req, res) {

  if (!req.user) {
    res.status(401).json({
      error: 'Unauthorized'
    });
  } else {
    res.status(200).json({
      jwt: req.token
    });
  }
  
}

export default { authenticate, generateToken, respondJWT };