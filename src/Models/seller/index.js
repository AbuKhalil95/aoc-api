export default (sequelize, Sequelize) => {
    const SellerModel = sequelize.define("sellers", {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING,
            unique: true
        },
    });

    return SellerModel;
};
