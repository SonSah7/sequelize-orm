import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Dealership = sequelize.define('dealership', {
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
    validate: { len: [1, 100] }
  },
  address: {
    type: DataTypes.STRING(200),
    allowNull: false,
    validate: { len: [1, 200] }
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  deleted_at: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  paranoid: true
});

export default Dealership;