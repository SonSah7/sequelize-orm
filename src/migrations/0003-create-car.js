const createCarTable = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('cars', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        make: {
          type: Sequelize.STRING,
          allowNull: false
        },
        model: {
          type: Sequelize.STRING,
          allowNull: false
        },
        dealership_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'dealerships', key: 'id' }
        }
      });
    },
  
    down: async (queryInterface) => {
      await queryInterface.dropTable('cars');
    }
  };
  
  export default createCarTable;