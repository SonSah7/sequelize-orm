import express from 'express';
import UserController from '../controllers/user.controller.js';

const router = express.Router();

router.post('/', UserController.createUser);
router.get('/:id', UserController.getUser);

export default router;