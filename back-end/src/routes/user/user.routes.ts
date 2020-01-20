import { Router } from 'express';
import { UserController } from '@src/controllers';
const router: Router = Router();

router.post('', UserController.addUser);
router.post('/login', UserController.login);
router.put('/:id', UserController.updateUser);

export default router;
