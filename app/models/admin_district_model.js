
module.exports = (sequelize, Sequelize) => {
  const AdminDistrict = sequelize.define("ADMIN_DISTRICT", {
    ADMIN_DIS_ID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
    ADMIN_DIS_NAME_EN: {
      type: Sequelize.STRING(200)
    },
    ADMIN_DIS_NAME_SI: {
      type: Sequelize.STRING(200)
    },
    ADMIN_DIS_NAME_TA: {
      type: Sequelize.STRING(200)
    },

  });

  return AdminDistrict;
};