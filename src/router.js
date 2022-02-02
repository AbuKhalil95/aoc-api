import express from "express";

import authRoutes from "./API/Authentication"
import genericRoutes from "./API/Generic"

const router = express.Router();

// Attaching needed API routes to the router before exporting it 
router.use(authRoutes);
router.use(genericRoutes);

export default router;
