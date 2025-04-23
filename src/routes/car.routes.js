import express from 'express';
import CarController from '../controllers/car.controller.js';

const router = express.Router();

router.post('/:carId/features', CarController.addFeature);
router.delete('/:carId/features', CarController.removeFeature);
router.get('/:carId/features', CarController.getCarWithFeatures);

export default router;