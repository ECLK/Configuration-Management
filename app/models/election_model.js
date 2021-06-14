
module.exports = (sequelize, Sequelize) => {
  const Election = sequelize.define("ELECTION", {
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
    ELECTION_TEMPLATE_NAME_EN: {
      type: Sequelize.STRING(200)
    },
    ELECTION_TEMPLATE_NAME_SI: {
      type: Sequelize.STRING(200)
    },
    ELECTION_TEMPLATE_NAME_TA: {
      type: Sequelize.STRING(200)
    },
    ELECTION_TYPE: {
      type: Sequelize.ENUM('PRE','PAR','PRO','LOC'),
    }

  });

  return Election;
};