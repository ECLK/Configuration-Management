
module.exports = (sequelize, Sequelize) => {
    const EligibilityConfig = sequelize.define("ELIGIBILITY_CONFIG", {
      ID: {
        type: Sequelize.STRING(36),
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      DESCRIPTION: {
        type: Sequelize.STRING(300)
      },
    });
  
    return EligibilityConfig;
  };