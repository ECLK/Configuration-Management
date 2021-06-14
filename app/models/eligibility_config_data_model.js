
module.exports = (sequelize, Sequelize) => {
    const EligibilityConfigData = sequelize.define("ELIGIBILITY_CONFIG_DATA", {
      ID: {
        type: Sequelize.STRING(36),
        allowNull: false,
        unique: true,
        primaryKey: true
      },
    });
  
    return EligibilityConfigData;
  };