module.exports = (sequelize, Sequelize) => {
  const Worker = sequelize.define("worker", {
    id: {
      type: Sequelize.CHAR(36),
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      unique: true,
      primaryKey: true
    },
    firstname: {
      type: Sequelize.STRING
    },
    lastname: {
      type: Sequelize.STRING
    },
    mobile: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    jobrole: {
      type: Sequelize.ENUM('CASHIER', 'DELIVER'),
      defaultValue: "CASHIER",
    },
    published: {
      type: Sequelize.BOOLEAN
    },
    status: {
      type: Sequelize.ENUM('NEW', 'VERIFIED','BLOCKED'),
      defaultValue: "NEW",
    }
  });

  return Worker;
};