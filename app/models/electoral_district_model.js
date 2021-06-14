
module.exports = (sequelize, Sequelize) => {
  const ElectoralDistrict = sequelize.define("ELECTORAL_DISTRICT", {
    ED_ID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
    ED_NAME_EN: {
      type: Sequelize.STRING(200)
    },
    ED_NAME_SI: {
      type: Sequelize.STRING(200)
    },
    ED_NAME_TA: {
      type: Sequelize.STRING(200)
    },
   
  });

  return ElectoralDistrict;
};