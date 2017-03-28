import express from 'express';
import userRoutes from './users/userRoutes';
import loginRoutes from './login/loginRoutes';

const router = express.Router();

router.use('/users', userRoutes);
router.use('/login', loginRoutes);

router.get('/api-status', (req, res) =>
  res.json({
    status: "ok"
  })
);

export default router;