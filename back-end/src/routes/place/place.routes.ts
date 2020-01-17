import { Router } from 'express';
import { PlaceController } from '@src/controllers';
const router: Router = Router();

router.post('', PlaceController.addPlace);
router.delete('/:name', PlaceController.removePlace);
router.get('/:name', PlaceController.getPlace);

export default router;
