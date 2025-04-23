const createFeatureTable = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('features', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
        }
      });
    },
  
    down: async (queryInterface) => {
      await queryInterface.dropTable('features');
    }
  };
  
  export default createFeatureTable;