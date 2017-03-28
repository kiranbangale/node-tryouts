import config from '../../config/config';
import jwt from 'jsonwebtoken';

module.exports = (req, res, nxt) => {

  const token = req.body.token || req.query.token || req.headers['x-access-token'];

  if(token) {

    jwt.verify(token, config.secret, (err, decoded) => {
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

}