module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define("order", {
        id: {
            type: Sequelize.CHAR(36),
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            unique: true,
            primaryKey: true
        },
        custid: {
            type: Sequelize.CHAR(36),
            allowNull: false,
        },
        ordervalue: {
            type: Sequelize.FLOAT,
            defaultValue: 0.0,
        },
        discount: {
            type: Sequelize.FLOAT,
            defaultValue: 0.0,
        },
        transportcharge: {
            type: Sequelize.FLOAT,
            defaultValue: 0.0,
        },
        discounttype: {
            type: Sequelize.CHAR(36),
            defaultValue: "NO",
        },
        discountcode: {
            type: Sequelize.STRING,
            defaultValue: "NO",
        },
        paymetmode: {
            type: Sequelize.ENUM('CASH', 'CARD'),
            defaultValue: "CASH",
        },
        currency: {
            type: Sequelize.ENUM('Rs'),
            defaultValue: "Rs",
        },
        ordertime: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
        requireddate: {
            type: Sequelize.DATEONLY
        },
        requireddate: {
            type: Sequelize.DATE
        },
        deliverylocation: {
            type: Sequelize.GEOMETRY('POINT')
        },
        deliveryAddress: {
            type: Sequelize.STRING(1234),
            allowNull: false,
        },
        orderstatus: {
            type: Sequelize.ENUM("NEW", "CONFIRMED", "READY", "ONDELIVER", "DELIVERED", "PAID", "COMPLETETE"),
            defaultValue: "NEW",
        }
    });
  
    return Order;
  };
