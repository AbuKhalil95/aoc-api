import models from "../../../Models";
import { verifyToken } from "../../../Utils/tokens";

// Standard Authentication check JWT Tokens on specified routes
export default checkAuthentication = (req, res, next) => {
  
  // Ignore auth if registering new user
  if (req.model === models.User && req.method === "POST") {
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
  const user = models.User.findByPk(id);
  if (!user) {
    return res.status(401).send({ error: "Invalid Authorization" });
  }

  // Attach the token to the request and move next
  req.token = token;
  next();
};
