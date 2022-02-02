import Sequelize from "sequelize";
import sequelize from "../Config/db.config";

import BuyerModel from "./buyer";
import AppointmentModel from "./apppointment";
import SellerModel from "./seller";

const Buyer = BuyerModel(sequelize, Sequelize);
const Appointment = AppointmentModel(sequelize, Sequelize);
const Seller = SellerModel(sequelize, Sequelize);

// connecting Buyer to Appointment one to many
Buyer.Appointment = Buyer.hasMany(Appointment);
Appointment.Buyer = Appointment.belongsTo(Buyer);

// connecting Seller to Appointment one to many
Seller.Appointment = Seller.hasMany(Appointment);
Appointment.Seller = Appointment.belongsTo(Seller);

const models = { Buyer, Appointment, Seller };
export default models;
