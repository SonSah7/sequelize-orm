import CarService from '../services/car.service.js';

class CarController {
  static async addFeature(req, res) {
    try {
      const { featureId } = req.body;
      const result = await CarService.addFeatureToCar(
        req.params.carId,
        featureId
      );
      res.status(201).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async removeFeature(req, res) {
    try {
      const { featureId } = req.body;
      const result = await CarService.removeFeatureFromCar(
        req.params.carId,
        featureId
      );
      res.json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getCarWithFeatures(req, res) {
    try {
      const car = await CarService.getCarWithFeatures(req.params.carId);
      if (!car) {
        return res.status(404).json({ error: 'Car not found' });
      }
      res.json(car);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default CarController;