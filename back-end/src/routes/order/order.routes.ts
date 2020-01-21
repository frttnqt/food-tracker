import { Router } from 'express';
import { OrderController } from '@src/controllers';
const router: Router = Router();

router.post('', OrderController.createOrder);
router.get('/:orderId', OrderController.getOrder);
router.get('/:userId?date', OrderController.getOrderList);
router.put('/:orderId', OrderController.updateOrder);
router.delete('/:orderId', OrderController.deleteOrder);

export default router;
