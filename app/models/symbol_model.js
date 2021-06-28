
module.exports = (sequelize, Sequelize) => {
  const Symbol = sequelize.define("SYMBOL", {
    SYMBOL_ID: {
      type: Sequelize.BIGINT,
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
    SYMBOL_TEXT: {
      type: Sequelize.STRING(200)
    },
    SYMBOL_IMAGE: {
      type: Sequelize.STRING(200)
    },
    
  });

  return Symbol;
};