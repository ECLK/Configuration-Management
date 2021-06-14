
module.exports = (sequelize, Sequelize) => {
    const SupportDocConfig = sequelize.define("SUPPORT_DOC_CONFIG", {
      ID: {
        type: Sequelize.STRING(36),
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      KEY_NAME: {
        type: Sequelize.STRING(50)
      },
      DESCRIPTION: {
        type: Sequelize.STRING(100)
      },
      DOC_CATEGORY: {
        type: Sequelize.ENUM('NOMINATION','CANDIDATE','OBJECTION','PAYMENT'),
      },
      CATEGORY: {
        type: Sequelize.ENUM('SECURITY DEPOSIT','IDENTITY','REPRESENTATION','FINANCIAL','OTHER'),
      }
    });
  
    return SupportDocConfig;
  };