import { authModelRoute } from "../../Models";
import { loginName } from "../../Services/Authentication";

// TODO: refactor to use username/email and password once user model is made
export const handleLogin = async (req, res) => {
  console.log(req.query, req.params.user);
  const name = req.query.name;
  const model = authModelRoute[req.params.user];
  console.log(model);

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
