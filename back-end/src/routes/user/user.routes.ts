import { Router } from 'express';
import { UserController } from '@src/controllers';
import { isLoggedIn } from '@src/helpers';

const router: Router = Router();

router.post('', UserController.addUser);
router.post('/login', UserController.login);
router.put('/:id', isLoggedIn, UserController.updateUser);
router.delete('/:id', isLoggedIn, UserController.deleteUser);

export default router;
