import "./src/Config";
import db from "./src/Config/db.config.js";
import models from "./src/Models";
import server from "./src/server.js";

// Initialize with data to test models
db.sync({ force: true }).then(async () => {
    console.log("Drop and re-sync db.");

    const buyer = await models.Buyer.create({ name: "Joe" });
    const seller = await models.Seller.create({ name: "Biden" })
    const appointment = await models.Appointment.create({ date: new Date() })

    buyer.addAppointment(appointment);
    seller.addAppointment(appointment);
});

server.start();
