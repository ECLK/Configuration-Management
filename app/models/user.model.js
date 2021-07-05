
module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    id: {
      type: Sequelize.BIGINT,
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING(200)
    },
    tp: {
      type: Sequelize.STRING(20)
    },
    mobile: {
      type: Sequelize.STRING(20)
    },
    email: {
      type: Sequelize.STRING(100)
    },
    watsup: {
      type: Sequelize.STRING(20)
    },
    password: {
      type: Sequelize.STRING(255)
    },
    status: {
      type: Sequelize.ENUM('ACTIVE', 'INCTIVE', 'SUSPEND'),
      defaultValue: "INCTIVE",
    }
  });

  return User;
};