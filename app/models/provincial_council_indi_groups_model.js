
module.exports = (sequelize, Sequelize) => {
  const ProvincialCouncilIndiGroup = sequelize.define("PROVINCIAL_COUNCIL_INDI_GROUP", {
    PCIP_ID: {
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

    ITTERATION_ID: {
      type: Sequelize.BIGINT,
      allowNull: false,
    },
   
  });

  return ProvincialCouncilIndiGroup;
};