
module.exports = (sequelize, Sequelize) => {
    const DivisionConfig = sequelize.define("DIVISION_CONFIG", {
      ID: {
        type: Sequelize.STRING(36),
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      NAME: {
        type: Sequelize.STRING(100)
      },
      CODE: {
        type: Sequelize.STRING(10)
      },
      NO_OF_CANDIDATES: {
        type: Sequelize.INTEGER(5)
      },
      PARENT_NAME: {
        type: Sequelize.STRING(100)
      },
    });
  
    return DivisionConfig;
  };