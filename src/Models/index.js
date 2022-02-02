import Sequelize from "sequelize";
import sequelize from "../Config/db.config";

import BuyerModel from "./buyer";
import AppointmentModel from "./apppointment";
import SellerModel from "./seller";

const Buyer = BuyerModel(sequelize, Sequelize);
const Appointment = AppointmentModel(sequelize, Sequelize);
const Seller = SellerModel(sequelize, Sequelize);

// Connecting Buyer to Appointment one to many
Buyer.Appointment = Buyer.hasMany(Appointment);
Appointment.Buyer = Appointment.belongsTo(Buyer);

// Connecting Seller to Appointment one to many
Seller.Appointment = Seller.hasMany(Appointment);
Appointment.Seller = Appointment.belongsTo(Seller);

const models = { Buyer, Appointment, Seller };
export default models;

// Helps define what routes connect to which model
export const modelRoute = {
    buyers: Buyer,
    appointments: Appointment,
    sellers: Seller,
}

// Helps define what route means which auth model
// TODO: remove once user auth refactor is done
export const authModelRoute = {
    buyer: Buyer,
    seller: Seller,
}
