import { Router } from 'express';
import { UserController } from '@src/controllers';
const router: Router = Router();

router.post('', UserController.addUser);
router.get('/login', UserController.login);

export default router;
