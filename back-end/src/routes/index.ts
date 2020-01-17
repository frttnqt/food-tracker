import { Router } from 'express';
import UserRouter from './user';
import PlaceRouter from './place';

const router = Router();

router.use('/user', UserRouter);
router.use('/place', PlaceRouter);

export default router;
