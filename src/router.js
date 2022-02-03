import express from "express";

import authRoutes from "./API/Authentication"
import genericRoutes from "./API/Generic"
import appointmentRoute from "./API/Appointments"

const router = express.Router();

// Attaching needed API routes to the router before exporting it 
router.use(authRoutes);
router.use(genericRoutes);
router.use(appointmentRoute);

export default router;
