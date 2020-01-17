import { Router } from 'express';
import { PlaceController } from '@src/controllers';
const router: Router = Router();

router.post('', PlaceController.addPlace);
router.get('/:name', PlaceController.getPlace);

export default router;
