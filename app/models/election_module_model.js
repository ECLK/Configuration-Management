
module.exports = (sequelize, Sequelize) => {
    const ElectionModule = sequelize.define("ELECTION_MODULE", {
      ID: {
        type: Sequelize.STRING(36),
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      NAME: {
        type: Sequelize.STRING(100)
      },
      DIVISION_COMMON_NAME: {
        type: Sequelize.STRING(20)
      },
      CREATED_BY: {
        type: Sequelize.STRING(50)
      },
      CREATED_AT: {
        type: Sequelize.BIGINT(20)
      },
      UPDATE_AT: {
        type: Sequelize.BIGINT(20)
      },
    });
  
    return ElectionModule;
  };