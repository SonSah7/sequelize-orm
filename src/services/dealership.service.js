import db from '../models/index.js';

class DealershipService {
  static async createDealership(dealershipData) {
    return db.Dealership.create(dealershipData);
  }

  static async getAllDealerships() {
    return db.Dealership.findAll({
      attributes: [
        'id',
        'name',
        'address',
        'description',
        [db.sequelize.literal('(SELECT COUNT(*) FROM cars WHERE cars.dealership_id = dealership.id)'), 'car_count']
      ],
      order: [[db.sequelize.literal('car_count'), 'DESC']]
    });
  }

  static async getDealershipById(id) {
    return db.Dealership.findByPk(id, {
      include: [
        {
          model: db.User,
          attributes: ['id', 'username', 'email']
        },
        {
          model: db.Car,
          include: [
            {
              model: db.Feature,
              through: { attributes: [] }
            },
            {
              model: db.Rating,
              include: [{
                model: db.User,
                attributes: ['username']
              }]
            }
          ]
        }
      ]
    });
  }

  static async addUserToDealership(dealershipId, userId) {
    const user = await db.User.findByPk(userId);
    if (!user) throw new Error('User not found');
    return user.update({ dealership_id: dealershipId });
  }

  static async addCarToDealership(dealershipId, carData) {
    return db.Car.create({ 
      ...carData, 
      dealership_id: dealershipId 
    });
  }
}

export default DealershipService;