// ---------------------- Crud specific to making appointments ---------------------- //
import { Router } from "express";
import checkAuthentication from "../Middleware/Auth/checkAuthentication.js";
import {
    availableAppointments,
    newAppointment,
} from "./controller.js";

const router = Router();

router.get(`/appointments/available/:buyer`, checkAuthentication, availableAppointments);
router.post(`/appointments/:buyer/:seller`, checkAuthentication, newAppointment);

export default router;
