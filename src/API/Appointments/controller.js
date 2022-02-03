import models from "../../Models";

// TODO: refactor to take id from token/auth directly for better privacy
export const availableAppointments = async (req, res) => {
    try {
        const { buyer: buyerId } = req.params;
        const sellers = await models.Seller.findAll({
            include: [{
                model: models.Appointment,
                where: { buyerId },
                required: false,
            }]
        })

        return res.status(200).send(sellers);
    } catch ({ errors: [{ message }] }) {
        return res.status(500).send({ error: message });
    }
}

export const bookedAppointments = async (req, res) => {
    try {
        const { buyer: buyerId } = req.params;
        const sellers = await models.Seller.findAll({
            include: [{
                model: models.Appointment,
                where: { buyerId },
                required: true,
            }]
        })

        return res.status(200).send(sellers);
    } catch ({ errors: [{ message }] }) {
        return res.status(500).send({ error: message });
    }
}

export const requestedAppointments = async (req, res) => {
    try {
        const { seller: sellerId } = req.params;
        const buyers = await models.Buyer.findAll({
            include: [{
                model: models.Appointment,
                where: { sellerId },
                required: true,
            }]
        })

        return res.status(200).send(buyers);
    } catch ({ errors: [{ message }] }) {
        return res.status(500).send({ error: message });
    }
}

export const newAppointment = async (req, res) => {
    try {
        const { buyer: buyerId, seller: sellerId } = req.params;
        const { date } = req.query;
        const buyer = await models.Buyer.findByPk(buyerId);
        const seller = await models.Seller.findByPk(sellerId);
        const appointment = await models.Appointment.create({ date })
        await buyer.addAppointment(appointment);
        await seller.addAppointment(appointment);

        return res.status(200).send(appointment);
    } catch ({ errors: [{ message }] }) {
        return res.status(500).send({ error: message });
    }
}