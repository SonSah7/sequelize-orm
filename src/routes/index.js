import express from 'express';
import dealershipRoutes from './dealership.routes.js';
import userRoutes from './user.routes.js';
import carRoutes from './car.routes.js';
import ratingRoutes from './rating.routes.js';
import featureRoutes from './feature.routes.js';

const router = express.Router();


//  API Status Check

router.get('/status', (_, res) => {
  res.status(200).json({ 
    status: 'active',
    timestamp: new Date().toISOString(),
    version: process.env.npm_package_version 
  });
});

router.use('/dealerships', dealershipRoutes);  
router.use('/users', userRoutes);            
router.use('/cars', carRoutes);              
router.use('/ratings', ratingRoutes);     
router.use('/features', featureRoutes);   

//  404 Handler

router.use((_, res) => {
    res.status(404).json({ error: 'Endpoint not found' });
  });

export default router;