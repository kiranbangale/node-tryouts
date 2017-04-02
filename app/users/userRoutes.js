import express from 'express';
import validate from 'express-validation';
import userCtrl from './userCtrl';
import auth from '../../config/jwt';
import validationRules from '../middlewares/validate';

const router = express.Router();

router.route('/')
    .get(auth, userCtrl.list)
    .post(validate(validationRules.createReq), userCtrl.create);

router.route('/:userId')
    .get(auth, userCtrl.get)
    .put(auth, validate(validationRules.updateReq), userCtrl.update)
    .delete(auth, userCtrl.remove);

// Load user when API with userId route parameter is hit (Executes load function first and then next function)
router.param('userId', validate(validationRules.getReq));
router.param('userId', userCtrl.load);

export default router;
