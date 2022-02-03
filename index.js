import "./src/Config";
import db from "./src/Config/db.config.js";
import models from "./src/Models";
import server from "./src/server.js";

// Initialize with data to test models
db.sync({ force: true }).then(async () => {
    console.log("Drop and re-sync db.");

    const buyer = await models.Buyer.create({ name: "Joe" });
    const seller1 = await models.Seller.create({ name: "Biden" })
    const seller2 = await models.Seller.create({ name: "Sara" })
    const seller3 = await models.Seller.create({ name: "Pailen" })

    const appointment = await models.Appointment.create({ date: new Date() })

    buyer.addAppointment(appointment);
    seller1.addAppointment(appointment);
});

server.start();
