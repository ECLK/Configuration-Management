module.exports = (sequelize, Sequelize) => {
  const Productcategory = sequelize.define("productcategory", {
    titleeng: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      primaryKey: true
    },
    titlesin: {
      type: Sequelize.STRING
    },
    titletam: {
      type: Sequelize.BOOLEAN
    },
    productcatstatus: {
      type: Sequelize.ENUM("ACTIVE", "INACTIVE"),
      defaultValue: "ACTIVE",
  }
  });

  return Productcategory;
};