import { authModelRoute } from "../../Models";
import { loginName } from "../../Services/Authentication";

// TODO: refactor to use username/email and password once user model is made
export const handleLogin = async (req, res) => {
  const name = req.query.name;
  const model = authModelRoute[req.params.user];

  try {
    const tokenizedInfo = await loginName(name, model);
    if (tokenizedInfo.user) {
      return res.status(200).send(tokenizedInfo);
    }
    return res.status(401).send();
  } catch (error) {
    res.status(501).send("Bad Credentials");
  }
};
