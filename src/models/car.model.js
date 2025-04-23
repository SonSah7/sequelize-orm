import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Car = sequelize.define('car', {
  make: {
    type: DataTypes.STRING,
    allowNull: false
  },
  model: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dealership_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, { timestamps: false });

export default Car;