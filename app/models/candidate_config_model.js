
module.exports = (sequelize, Sequelize) => {
    const CandidateConfig = sequelize.define("CANDIDATE_CONFIG", {
      ID: {
        type: Sequelize.STRING(36),
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      KEY_NAME: {
        type: Sequelize.STRING(50)
      },
      JSON_SCHEMA:{
        type: Sequelize.STRING(200)
      },
      DESCRIPTION: {
        type: Sequelize.STRING(100)
      },
    });
  
    return CandidateConfig;
  };