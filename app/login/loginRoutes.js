import express from 'express';
import loginCtrl from './loginCtrl';

const router = express.Router();

router.route('/token')
  .post(loginCtrl.authenticate,
    loginCtrl.generateToken,
    loginCtrl.respondJWT);

export default router;