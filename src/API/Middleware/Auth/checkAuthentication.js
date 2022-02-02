import models from "../../../Models";
import { verifyToken } from "../../../Utils/tokens";

// Standard Authentication check JWT Tokens on specified routes
const checkAuthentication = (req, res, next) => {

  // Ignore auth if registering new user
  if ((req.model === models.Buyer || req.model === models.Seller) && req.method === "POST") {
    return next();
  }

  // Check existence of token in request
  const token = req.headers.authorization?.replace("Bearer ", "");
  if (!token) {
    return res.status(401).send({ error: "Unauthorized" });
  }

  // Check existstence of ID in the token
  const { id } = verifyToken(token);
  if (!id) {
    return res.status(401).send({ error: "Invalid Authorization" });
  }

  // Check existense of user in the DB with the ID
  // TODO: refactor buyer and seller to have a foreign key to user
  const user = models.Buyer.findByPk(id) || models.Seller.findByPk(id);
  if (!user) {
    return res.status(401).send({ error: "Invalid Authorization" });
  }

  // Attach the token to the request and move next
  req.token = token;
  next();
};

export default checkAuthentication