const createRatingTable = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('ratings', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        rate: {
          type: Sequelize.INTEGER,
          allowNull: false,
          validate: { min: 0, max: 5 }
        },
        car_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'cars', key: 'id' }
        },
        user_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'users', key: 'id' }
        }
      });
    },
  
    down: async (queryInterface) => {
      await queryInterface.dropTable('ratings');
    }
  };
  
  export default createRatingTable;