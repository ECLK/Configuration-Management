
module.exports = (sequelize, Sequelize) => {
  const LocalAuthority = sequelize.define("LOCAL_AUTHORITY", {
    LA_ID: {
      type: Sequelize.BIGINT,
      allowNull: false,
      unique: true,
      primaryKey: true,
      autoIncrement: true
    },
    LA_NAME_EN: {
      type: Sequelize.STRING(200)
    },
    LA_NAME_SI: {
      type: Sequelize.STRING(200)
    },
    LA_NAME_TA: {
      type: Sequelize.STRING(200)
    },
    ITTERATION_ID: {
      type: Sequelize.BIGINT,
      allowNull: false,
    },    
  });

  return LocalAuthority;
};