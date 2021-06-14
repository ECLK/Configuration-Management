
module.exports = (sequelize, Sequelize) => {
  const PollingStation = sequelize.define("polling_station", {
    PS_ID: {
      type: Sequelize.BIGINT,
      allowNull: false,
      unique: true,
      primaryKey: true,
      autoIncrement: true
    },
    PS_REGISTERED_NORMAL_VOTERS: {
      type: Sequelize.INTEGER
    },
    PS_REGISTERED_POSTAL_VOTERS: {
      type: Sequelize.INTEGER
    },
    PS_REGISTERED_DISPLACED_VOTERS: {
      type: Sequelize.INTEGER
    },
    PS_REGISTERED_QUARANTINE_VOTERS: {
      type: Sequelize.INTEGER
    },
    ITTERATION_ID: {
      type: Sequelize.BIGINT,
      allowNull: false,
    },
  });

  return PollingStation;
};