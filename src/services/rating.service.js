import db from '../models/index.js';

class RatingService {
  static async createRating(carId, userId, rate) {
    return db.Rating.create({ 
      car_id: carId,
      user_id: userId,
      rate 
    });
  }

  static async getCarRatings(carId) {
    return db.Rating.findAll({
      where: { car_id: carId },
      include: [{
        model: db.User,
        attributes: ['username']
      }]
    });
  }

  static async getAverageRating(carId) {
    const result = await db.Rating.findOne({
      where: { car_id: carId },
      attributes: [
        [db.sequelize.fn('AVG', db.sequelize.col('rate')), 'average_rating']
      ],
      raw: true
    });
    return result?.average_rating || 0;
  }
}

export default RatingService;