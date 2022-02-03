import "./src/Config";
import db from "./src/Config/db.config.js";
import models from "./src/Models";
import server from "./src/server.js";

// Initialize with data to test models
db.sync({ force: true }).then(async () => {
    console.log("Drop and re-sync db.");

    const buyer1 = await models.Buyer.create({ name: "Joe" });
    const buyer2 = await models.Buyer.create({ name: "Waren" });
    const buyer3 = await models.Buyer.create({ name: "Bill" });
    const buyer4 = await models.Buyer.create({ name: "Sara" });

    const seller1 = await models.Seller.create({ name: "Biden" })
    const seller2 = await models.Seller.create({ name: "Buffet" })
    const seller3 = await models.Seller.create({ name: "Gates" })

    const appointment1 = await models.Appointment.create({ date: new Date() })
    const appointment2 = await models.Appointment.create({ date: new Date() })
    const appointment3 = await models.Appointment.create({ date: new Date() })
    const appointment4 = await models.Appointment.create({ date: new Date() })

    buyer1.addAppointment(appointment1);
    seller1.addAppointment(appointment1);

    buyer2.addAppointment(appointment2);
    seller2.addAppointment(appointment2);

    buyer3.addAppointment(appointment3);
    seller2.addAppointment(appointment3);

    buyer4.addAppointment(appointment4);
    seller2.addAppointment(appointment4);

});

server.start();
