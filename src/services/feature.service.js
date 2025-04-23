import db from '../models/index.js';

class FeatureService {
  static async createFeature(featureData) {
    return db.Feature.create(featureData);
  }

  static async getAllFeatures() {
    return db.Feature.findAll();
  }
}

export default FeatureService;