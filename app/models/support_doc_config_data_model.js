
module.exports = (sequelize, Sequelize) => {
    const SupportDocConfigData = sequelize.define("SUPPORT_DOC_CONFIG_DATA", {
      ID: {
        type: Sequelize.STRING(36),
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      MODULE_ID: {
        type: Sequelize.STRING(36)
      }
    });
  
    return SupportDocConfigData;
  };