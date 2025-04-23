const createDealershipTable = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('dealerships', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
          type: Sequelize.STRING(100),
          allowNull: false
        },
        address: {
          type: Sequelize.STRING(200),
          allowNull: false
        },
        description: {
          type: Sequelize.TEXT,
          allowNull: true
        },
        deleted_at: {
          type: Sequelize.DATE,
          allowNull: true
        }
      });
    },
  
    down: async (queryInterface) => {
      await queryInterface.dropTable('dealerships');
    }
  };
  
  export default createDealershipTable;