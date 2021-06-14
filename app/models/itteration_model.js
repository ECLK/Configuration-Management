
module.exports = (sequelize, Sequelize) => {
  const Itteration = sequelize.define("ITTERATION", {
    ITERATION_ID: {
      type: Sequelize.BIGINT,
      allowNull: false,
      unique: true,
      primaryKey: true,
      autoIncrement: true
    },
    ITERATION_NAME: {
      type: Sequelize.STRING(200)
    },
    ITERATION_STATUS: {
      type: Sequelize.BOOLEAN
    },
    
  });

  return Itteration;
};