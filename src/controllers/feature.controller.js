import FeatureService from '../services/feature.service.js';

class FeatureController {
  static async createFeature(req, res) {
    try {
      const feature = await FeatureService.createFeature(req.body);
      res.status(201).json(feature);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getAllFeatures(req, res) {
    try {
      const features = await FeatureService.getAllFeatures();
      res.json(features);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default FeatureController;