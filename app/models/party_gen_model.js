
module.exports = (sequelize, Sequelize) => {
  const PartyGen = sequelize.define("PART_GEN", {
    PARTY_ID: {
      type: Sequelize.BIGINT,
      allowNull: false,
      unique: true,
      primaryKey: true,
      autoIncrement: true
    },
    PARTY_NAME_EN: {
      type: Sequelize.STRING(200)
    },
    PARTY_NAME_SI: {
      type: Sequelize.STRING(200)
    },
    PARTY_NAME_TA: {
      type: Sequelize.STRING(200)
    },
    PARTY_ABBR_EN: {
      type: Sequelize.STRING(200)
    },
    PARTY_ABBR_SI: {
      type: Sequelize.STRING(200)
    },
    PARTY_ABBR_TA: {
      type: Sequelize.STRING(200)
    },
    PARTY_SYMBOL_IN_TEXT_EN: {
      type: Sequelize.STRING(200)
    },
    PARTY_SYMBOL_IN_TEXT_SI: {
      type: Sequelize.STRING(200)
    },
    PARTY_SYMBOL_IN_TEXT_TA: {
      type: Sequelize.STRING(200)
    },
    PARTY_COLOR_EN: {
      type: Sequelize.STRING(200)
    },
    PARTY_COLOR_SI: {
      type: Sequelize.STRING(200)
    },
    PARTY_COLOR_TA: {
      type: Sequelize.STRING(200)
    },
    PARTY_SYMBOL_URL: {
      type: Sequelize.STRING(200)
    },
    PARTY_STATUS: {
      type: Sequelize.ENUM('ACTIVE', 'SUSPEND'),
      default:'ACTIVE'
    },
    
    });

  return PartyGen;
};