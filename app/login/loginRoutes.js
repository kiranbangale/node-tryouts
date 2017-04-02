import express from 'express';
import loginCtrl from './loginCtrl';
import activity from '../middlewares/activity';

const router = express.Router();

router.route('/')
    .post(loginCtrl.authenticate,
        loginCtrl.generateToken,
        loginCtrl.respondJWT,
        activity.save);

export default router;
