
module.exports = (sequelize, Sequelize) => {
    const ElectionModuleConfig = sequelize.define("ELECTION_MODULE_CONFIG", {
      ID: {
        type: Sequelize.STRING(36),
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      KEY_NAME: {
        type: Sequelize.STRING(50)
      },
      DESCRIPTION: {
        type: Sequelize.STRING(100)
      }
    });
  
    return ElectionModuleConfig;
  };