import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Feature = sequelize.define('feature', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, { timestamps: false });

export default Feature;