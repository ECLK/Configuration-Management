
module.exports = (sequelize, Sequelize) => {
  const DistrictCenter = sequelize.define("DISTRICT_CENTER", {
    DC_ID: {
      type: Sequelize.BIGINT,
      allowNull: false,
      unique: true,
      primaryKey: true,
      autoIncrement: true
    },
    DC_EN: {
      type: Sequelize.STRING(200)
    },
    DC_SI: {
      type: Sequelize.STRING(200)
    },
    DC_TA: {
      type: Sequelize.STRING(200)
    },
    DC_LONGITUDE: {
      type: Sequelize.FLOAT
    },
    DC_LATITUDE: {
      type: Sequelize.FLOAT
    },
    ITTERATION_ID: {
      type: Sequelize.BIGINT,
      allowNull: false,
    },
  });

  return DistrictCenter;
};