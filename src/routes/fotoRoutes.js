import { Router } from 'express';
// import loginRequired from '../middlewares/loginRequired';

import fotoController from '../controllers/FotoController';

const router = new Router();

router.post('/', fotoController.create);

export default router;
