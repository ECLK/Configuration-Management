
module.exports = (sequelize, Sequelize) => {
    const CandidateConfigData = sequelize.define("CANDIDATE_CONFIG_DATA", {
      ID: {
        type: Sequelize.STRING(36),
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      MODULE_ID: {
        type: Sequelize.STRING(36),
      },
      CANDIDATE_CONFIG_NAME: {
        type: Sequelize.STRING(100),
      },
    });
  
    return CandidateConfigData;
  };