import { Router } from 'express';
import { PlaceController } from '@src/controllers';
const router: Router = Router();

router.post('', PlaceController.addPlace);
router.delete('/:id', PlaceController.removePlace);
router.put('/:id', PlaceController.updatePlace);
router.get('/:id', PlaceController.getPlace);
router.get('/list', PlaceController.getPlaceList);

export default router;
