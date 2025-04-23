import express from 'express';
import RatingController from '../controllers/rating.controller.js';

const router = express.Router();

router.post('/', RatingController.createRating);
router.get('/car/:carId', RatingController.getCarRatings);
router.get('/car/:carId/average', RatingController.getAverageRating);

export default router;