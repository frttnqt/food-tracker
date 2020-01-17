import { Router } from 'express';
import { PositionController } from '@src/controllers';
const router: Router = Router();

router.post('', PositionController.addPositions);

export default router;
