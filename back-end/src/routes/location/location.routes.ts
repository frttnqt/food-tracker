import { Router } from 'express';
import { LocationController } from '@src/controllers';
const router: Router = Router();

router.post('', LocationController.createLocation);
router.get('/list', LocationController.getLocationList);
router.put('/:id', LocationController.updateLocation);
router.delete('/:id', LocationController.deleteLocation);

export default router;
