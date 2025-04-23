import db from '../models/index.js';

class CarService {
  static async addFeatureToCar(carId, featureId) {
    const car = await db.Car.findByPk(carId);
    if (!car) throw new Error('Car not found');
    return car.addFeature(featureId);
  }

  static async removeFeatureFromCar(carId, featureId) {
    const car = await db.Car.findByPk(carId);
    if (!car) throw new Error('Car not found');
    return car.removeFeature(featureId);
  }

  static async getCarWithFeatures(carId) {
    return db.Car.findByPk(carId, {
      include: [{
        model: db.Feature,
        through: { attributes: [] }
      }]
    });
  }
}

export default CarService;