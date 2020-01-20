import { Router } from 'express';
import { OrderController } from '@src/controllers';
const router: Router = Router();

router.post('', OrderController.createOrder);

export default router;
