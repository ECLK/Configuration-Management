module.exports = (sequelize, Sequelize) => {
    const Lineitems = sequelize.define("lineitems", {
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
        productid: {
            type: Sequelize.BIGINT,
            allowNull: false,
        },
        quanity: {
            type: Sequelize.FLOAT,
            defaultValue: 0.0,
        },
        unitprice: {
            type: Sequelize.FLOAT,
            defaultValue: 0.0,
        },
        discount: {
            type: Sequelize.FLOAT,
            defaultValue: 0.0,
        },
        orderstatus: {
            type: Sequelize.ENUM("ACTIVE", "INACTIVE"),
            defaultValue: "ACTIVE",
        }
    });

    return Lineitems;
};
