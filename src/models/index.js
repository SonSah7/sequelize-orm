import sequelize from '../config/db.js';
import Dealership from './dealership.model.js';
import User from './user.model.js';
import Car from './car.model.js';
import Feature from './feature.model.js';
import Rating from './rating.model.js';



//  Dealership - User (One-to-Many)
Dealership.hasMany(User, { foreignKey: 'dealership_id' });
User.belongsTo(Dealership, { foreignKey: 'dealership_id' });

//  Dealership - Car (One-to-Many)
Dealership.hasMany(Car, { foreignKey: 'dealership_id' });
Car.belongsTo(Dealership, { foreignKey: 'dealership_id' });

//  Car - Feature (Many-to-Many)
Car.belongsToMany(Feature, { 
  through: 'car_features', 
  foreignKey: 'car_id',
  timestamps: false 
});
Feature.belongsToMany(Car, { 
  through: 'car_features', 
  foreignKey: 'feature_id',
  timestamps: false 
});

//  Car - Rating (One-to-Many)
Car.hasMany(Rating, { foreignKey: 'car_id' });
Rating.belongsTo(Car, { foreignKey: 'car_id' });

//  User - Rating (One-to-Many)
User.hasMany(Rating, { foreignKey: 'user_id' });
Rating.belongsTo(User, { foreignKey: 'user_id' });


const db = {
  sequelize,
  Dealership,
  User,
  Car,
  Feature,
  Rating
};

export default db;