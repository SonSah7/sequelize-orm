const createUserTable = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('users', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        username: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
        },
        dealership_id: {
          type: Sequelize.INTEGER,
          references: { model: 'dealerships', key: 'id' }
        }
      });
    },
  
    down: async (queryInterface) => {
      await queryInterface.dropTable('users');
    }
  };
  
  export default createUserTable;