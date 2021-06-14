
module.exports = (sequelize, Sequelize) => {
  const CountingCenter = sequelize.define("COUNTING_CENTRE", {
    CC_ID: {
      type: Sequelize.BIGINT,
      allowNull: false,
      unique: true,
      primaryKey: true,
      autoIncrement: true
    },
    CC_NAME_EN: {
      type: Sequelize.STRING(200)
    },
    CC_NAME_SI: {
      type: Sequelize.STRING(200)
    },
    CC_NAME_TA: {
      type: Sequelize.STRING(200)
    },
    CC_TYPE: {
      type: Sequelize.ENUM('POSTAL', 'NORMAL'),
      defaultValue: "NORMAL",
    },
    ITTERATION_ID: {
      type: Sequelize.BIGINT,
      allowNull: false,
    },
  });

  return CountingCenter;
};