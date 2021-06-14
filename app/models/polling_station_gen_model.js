
module.exports = (sequelize, Sequelize) => {
  const PollingStationGen = sequelize.define("POLLING_STATION_GEN", {
    PS_ID: {
      type: Sequelize.BIGINT,
      allowNull: false,
      unique: true,
      primaryKey: true,
      autoIncrement: true
    },
    PS_CODE: {
      type: Sequelize.STRING(200)
    },
    PS_GN_DIV: {
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
    PS_LONGITUDE: {
      type: Sequelize.FLOAT
    },
    PS_LATITUDE: {
      type: Sequelize.FLOAT
    },
    });

  return PollingStationGen;
};