import db from '../models/index.js';

class UserService {
  static async createUser(userData) {
    return db.User.create(userData);
  }

  static async getUserById(id) {
    return db.User.findByPk(id, {
      include: [{
        model: db.Dealership,
        attributes: ['id', 'name']
      }]
    });
  }
}

export default UserService;