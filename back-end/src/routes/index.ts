import { Router } from 'express';

import UserRouter from './user';
import PlaceRouter from './place';
import { isLoggedIn } from '@src/helpers';

const router = Router();

router.use('/user', UserRouter);
router.use('/place', isLoggedIn, PlaceRouter);

export default router;
