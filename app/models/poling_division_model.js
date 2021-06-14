
module.exports = (sequelize, Sequelize) => {
  const PollingDivision = sequelize.define("POLLING_DIVISION", {
    PDIV_ID: {
      type: Sequelize.BIGINT,
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
    PDIV_NAME_EN: {
      type: Sequelize.STRING(200)
    },
    PDIV_NAME_SI: {
      type: Sequelize.STRING(200)
    },
    PDIV_NAME_TA: {
      type: Sequelize.STRING(200)
    },
  });

  return PollingDivision;
};