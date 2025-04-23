import express from 'express';
import DealershipController from '../controllers/dealership.controller.js';

const router = express.Router();

router.post('/', DealershipController.createDealership);
router.get('/', DealershipController.getAllDealerships);
router.get('/:id', DealershipController.getDealershipDetails);
router.post('/:id/users', DealershipController.addUserToDealership);
router.post('/:id/cars', DealershipController.addCarToDealership);

export default router;