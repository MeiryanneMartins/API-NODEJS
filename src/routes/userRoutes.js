import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', userController.index);
router.get('/', userController.show);

router.post('/', userController.create);
router.put('/:id', loginRequired, userController.update);
router.delete('/:id', loginRequired, userController.delete);

export default router;

/*
nomes de metódos -- geralmente se cria 5 em cada controller
index -> Lista todos os usuários; GET
store/create -> cria um novo usuário; POST
delete -> apaga um usuário; DELETE
show -> mostra um usuário; GET
update -> atualiza um usuário. PATCH OU PUT

*/
