
module.exports = (sequelize, Sequelize) => {
  const Ward = sequelize.define("WARD", {
    WD_ID: {
      type: Sequelize.BIGINT,
      allowNull: false,
      unique: true,
      primaryKey: true,
      autoIncrement: true
    },
    WD_NAME_EN: {
      type: Sequelize.STRING(200)
    },
    WD_NAME_SI: {
      type: Sequelize.STRING(200)
    },
    WD_NAME_TA: {
      type: Sequelize.STRING(200)
    },
    WD_GEO_LOCATION: {
      type: Sequelize.STRING(36)
    },
    ITTERATION_ID: {
      type: Sequelize.BIGINT,
      allowNull: false,
    },
  });
  return Ward;
};