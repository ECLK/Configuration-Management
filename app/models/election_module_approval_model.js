
module.exports = (sequelize, Sequelize) => {
    const ElectionModuleApproval = sequelize.define("ELECTION_MODULE_APPROVAL", {
      ID: {
        type: Sequelize.STRING(36),
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      STATUS: {
        type: Sequelize.ENUM(''),
      },
      APPROVED_BY: {
        type: Sequelize.STRING(50)
      },
      APPROVED_AT: {
        type: Sequelize.BIGINT(20)
      },
      UPDATED_AT: {
        type: Sequelize.BIGINT(20)
      },
      REVIEW_NOTE: {
        type: Sequelize.TEXT
      },
      MODULE_ID: {
        type: Sequelize.STRING(36)
      }
    });
  
    return ElectionModuleApproval;
  };