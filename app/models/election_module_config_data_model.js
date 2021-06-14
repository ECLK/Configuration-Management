
module.exports = (sequelize, Sequelize) => {
    const ElectionModuleConfigData = sequelize.define("ELECTION_MODULE_CONFIG_DATA", {
      ID: {
        type: Sequelize.STRING(36),
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      VALUE: {
        type: Sequelize.TEXT
      }
    });
  
    return ElectionModuleConfigData;
  };