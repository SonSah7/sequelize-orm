import express from 'express';
import FeatureController from '../controllers/feature.controller.js';

const router = express.Router();

router.post('/', FeatureController.createFeature);
router.get('/', FeatureController.getAllFeatures);

export default router;