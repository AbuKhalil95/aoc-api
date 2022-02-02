import { Router } from "express";
import { VALID_AUTH } from "../../Utils/CONSTANTS.js";
import { handleLogin } from "./controller.js";

const router = Router();

router.post(`/login/:user${VALID_AUTH}`, handleLogin);

export default router;
