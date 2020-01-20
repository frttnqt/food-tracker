import { Router } from 'express';
import { LocationController } from '@src/controllers';
const router: Router = Router();

router.post('', LocationController.createLocation);

export default router;
