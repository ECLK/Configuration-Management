module.exports = (sequelize, Sequelize) => {
  const product = sequelize.define("product", {
    id: {
      type: Sequelize.BIGINT,
      allowNull: false,
      unique: true,
      primaryKey: true
    },
    nameeng: {
      type: Sequelize.STRING
    },
    namesin: {
      type: Sequelize.STRING
    },
    nametam: {
      type: Sequelize.BOOLEAN
    },
    desceng: {
      type: Sequelize.STRING
    },
    descsin: {
      type: Sequelize.STRING
    },
    desctam: {
      type: Sequelize.BOOLEAN
    },
    img: {
      type: Sequelize.BOOLEAN
    },
    price: {
      type: Sequelize.FLOAT
    },
    discount: {
      type: Sequelize.FLOAT
    },
    qtyinstock: {
      type: Sequelize.FLOAT
    },
    discount: {
      type: Sequelize.FLOAT
    },
    orderstatus: {
      type: Sequelize.ENUM("INSTOCK", "DROPED", "OUTOFSTOCK" ),
      defaultValue: "INSTOCK",
  }
  });

  return product;
};