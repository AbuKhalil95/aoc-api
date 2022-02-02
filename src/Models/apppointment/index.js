export default (sequelize, Sequelize) => {
    const AppointmentModel = sequelize.define("appointments", {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        date: Sequelize.DATE,
        isAccepted: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
    });

    return AppointmentModel;
};
