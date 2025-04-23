const createCarFeaturesTable = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('car_features', {
        car_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          references: { model: 'cars', key: 'id' }
        },
        feature_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          references: { model: 'features', key: 'id' }
        }
      });
    },
  
    down: async (queryInterface) => {
      await queryInterface.dropTable('car_features');
    }
  };
  
  export default createCarFeaturesTable;