// ---------------------- Generic model to hold all CRUD by ID ---------------------- //
import { Router } from "express";
import checkAuthentication from "../Middleware/Auth/checkAuthentication.js";
import { getModel } from "../Middleware/DynamicHandler";
import { VALID_ROUTES } from "../../Utils/CONSTANTS.js";
import {
    getRecord,
    postRecord,
    putRecord
} from "./controller.js";

const router = Router();
router.param("model", getModel);

// generic crud
// TODO:  make new middlewares to validate appointment post is from buyer, and put is from seller
router.get(`/:model${VALID_ROUTES}/:id?`, getRecord);
router.post(`/:model${VALID_ROUTES}`, checkAuthentication, postRecord);
router.put(`/:model${VALID_ROUTES}/:id`, checkAuthentication, putRecord);

export default router;
