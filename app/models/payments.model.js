module.exports = (sequelize, Sequelize) => {
    const Payments = sequelize.define("payments", {
        id: {
            type: Sequelize.CHAR(36),
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            unique: true,
            primaryKey: true
        },
        orderid: {
            type: Sequelize.CHAR(36),
            allowNull: false,
        },
        workerid: {
            type: Sequelize.CHAR(36),
            allowNull: false,
        },
        amount: {
            type: Sequelize.FLOAT,
            defaultValue: 0.0,
        },
        paiddate:{
            type: Sequelize.DATE,
        },
        orderstatus: {
            type: Sequelize.ENUM("DONE", "PENDING"),
            defaultValue: "DONE",
        }
    });

    return Payments;
};
