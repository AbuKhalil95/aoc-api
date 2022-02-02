export default (sequelize, Sequelize) => {
    const BuyerModel = sequelize.define("buyers", {
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

    return BuyerModel;
};
