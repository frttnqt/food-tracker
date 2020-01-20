import { Router } from 'express';

import UserRouter from './user';
import PlaceRouter from './place';
import PositionRouter from './position';
import LocationRouter from './location';
import { isLoggedIn } from '@src/helpers';

const router = Router();

router.use('/user', UserRouter);
router.use('/place', isLoggedIn, PlaceRouter);
router.use('/position', isLoggedIn, PositionRouter);
router.use('/location', isLoggedIn, LocationRouter);

export default router;
