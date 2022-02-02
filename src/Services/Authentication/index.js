import models from "../../Models";
import { generateToken } from "../../Utils/tokens";

// TODO: refactor to seperate user auth from buyer and seller
// TODO: add password auth
export const loginName = async (name, model) => {
  console.log({ name, model });
  const user = await model.findOne({ where: { name } });
  const token = generateToken(user);
  console.log({user, token});
  return { user, token };
};
