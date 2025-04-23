import RatingService from '../services/rating.service.js';

class RatingController {
  static async createRating(req, res) {
    try {
      const { car_id, user_id, rate } = req.body;
      const rating = await RatingService.createRating(car_id, user_id, rate);
      res.status(201).json(rating);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getCarRatings(req, res) {
    try {
      const ratings = await RatingService.getCarRatings(req.params.carId);
      res.json(ratings);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getAverageRating(req, res) {
    try {
      const average = await RatingService.getAverageRating(req.params.carId);
      res.json({ average_rating: average });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default RatingController;