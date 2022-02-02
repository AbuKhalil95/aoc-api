import { authModelRoute, modelRoute } from "../Models"

export const VALID_ROUTES = `(${Object.keys(modelRoute).join("|")})`
export const VALID_AUTH = `(${Object.keys(authModelRoute).join("|")})`