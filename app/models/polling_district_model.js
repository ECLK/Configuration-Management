
module.exports = (sequelize, Sequelize) => {
  const PollingDistrict = sequelize.define("POLLING_DISTRICT", {
    PD_ID: {
      type: Sequelize.BIGINT,
      allowNull: false,
      unique: true,
      primaryKey: true,
      autoIncrement: true
    },
    PD_NUMBER: {
      type: Sequelize.STRING(200)
    },
    ITTERATION_ID: {
      type: Sequelize.BIGINT,
      allowNull: false,
    },
  });

  return PollingDistrict;
};