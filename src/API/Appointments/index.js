// ---------------------- Crud specific to making appointments ---------------------- //
import { Router } from "express";
import checkAuthentication from "../Middleware/Auth/checkAuthentication.js";
import {
    availableAppointments,
    bookedAppointments,
    requestedAppointments,
    newAppointment,
} from "./controller.js";

const router = Router();

router.get(`/appointments/available/:buyer`, checkAuthentication, availableAppointments);
router.get(`/appointments/booked/:buyer`, checkAuthentication, bookedAppointments);
router.get(`/appointments/requests/:seller`, checkAuthentication, requestedAppointments);

router.post(`/appointments/:buyer/:seller`, checkAuthentication, newAppointment);

export default router;
