
module.exports = (sequelize, Sequelize) => {
    const Province = sequelize.define("PROVINCE", {
      PROVINCE_ID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true,
      },
      PROVINCE_NAME_EN: {
        type: Sequelize.STRING(200)
      },
      PROVINCE_NAME_SI: {
        type: Sequelize.STRING(200)
      },
      PROVINCE_NAME_TA: {
        type: Sequelize.STRING(200)
      },
  
    });
  
    return Province;
  };