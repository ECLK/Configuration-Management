
module.exports = (sequelize, Sequelize) => {
  const ElectionGen = sequelize.define("ELECTION_GEN", {
    ELECTION_ID: {
      type: Sequelize.BIGINT,
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
    ELECTION_NAME_EN: {
      type: Sequelize.STRING(200)
    },
    ELECTION_NAME_SI: {
      type: Sequelize.STRING(200)
    },
    ELECTION_NAME_TA: {
      type: Sequelize.STRING(200)
    },
    ELECTION_TYPE: {
      type: Sequelize.ENUM('PRE','PAR','PRO','LOC'),
    }

  });

  return ElectionGen;
};