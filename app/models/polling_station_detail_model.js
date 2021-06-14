
module.exports = (sequelize, Sequelize) => {
  const PollingStationDetail = sequelize.define("POLLING_STATION_DETAILS", {
    PS_ID: {
      type: Sequelize.BIGINT,
      allowNull: false,
      unique: true,
      primaryKey: true,
      autoIncrement: true
    },
    PS_PROVINCE_EN: {
      type: Sequelize.STRING(200)
    },
    PS_PROVINCE_SI: {
      type: Sequelize.STRING(200)
    },
    PS_PROVINCE_TA: {
      type: Sequelize.STRING(200)
    },
    PS_ELEC_DIST_EN: {
      type: Sequelize.STRING(200)
    },
    PS_ELEC_DIST_SI: {
      type: Sequelize.STRING(200)
    },
    PS_ELEC_DIST_TA: {
      type: Sequelize.STRING(200)
    },
    PS_ELEC_ADMIN_DIST_EN: {
      type: Sequelize.STRING(200)
    },
    PS_ELEC_ADMIN_DIST_SI: {
      type: Sequelize.STRING(200)
    },
    PS_ELEC_ADMIN_DIST_TA: {
      type: Sequelize.STRING(200)
    },
    PS_POL_DIV_EN: {
      type: Sequelize.STRING(200)
    },
    PS_POL_DIV_SI: {
      type: Sequelize.STRING(200)
    },
    PS_POL_DIV_TA: {
      type: Sequelize.STRING(200)
    },
    PS_CC_EN: {
      type: Sequelize.STRING(200)
    },
    PS_CC_SI: {
      type: Sequelize.STRING(200)
    },
    PS_CC_TA: {
      type: Sequelize.STRING(200)
    },
    PS_NAME_EN: {
      type: Sequelize.STRING(200)
    },
    PS_NAME_SI: {
      type: Sequelize.STRING(200)
    },
    PS_NAME_TA: {
      type: Sequelize.STRING(200)
    },
    PS_POL_DIST: {
      type: Sequelize.STRING(200)
    },
    PS_LONGITUDE: {
      type: Sequelize.FLOAT
    },
    PS_LATITUDE: {
      type: Sequelize.FLOAT
    },
    ITTERATION_ID: {
      type: Sequelize.BIGINT,
      allowNull: false,
    },
    });

  return PollingStationDetail;
};