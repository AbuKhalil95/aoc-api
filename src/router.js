import express from "express";
import genericRoutes from "./API/Generic"

const router = express.Router();

// Attaching needed API routes to the router before exporting it 
router.use(genericRoutes);

export default router;
 