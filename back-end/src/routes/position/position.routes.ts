import { Router } from 'express';
import { PositionController } from '@src/controllers';
const router: Router = Router();

router.post('', PositionController.addPositions);
router.get('/:id', PositionController.getPosition);
router.get('/list/:id', PositionController.getPositionList);
router.put('', PositionController.updatePositions);
router.delete('', PositionController.deletePositions);

export default router;
