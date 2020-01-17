import { Router } from 'express';
import { PlaceController } from '@src/controllers';
const router: Router = Router();

router.post('', PlaceController.addPlace);

export default router;
