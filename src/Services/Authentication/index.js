import { generateToken } from "../../Utils/tokens";

// TODO: refactor to seperate user auth from buyer and seller
// TODO: add password auth
export const loginName = async (name, model) => {

  const user = await model.findOne({ where: { name } });
  // attach type to jwt token to avoid confusion
  user.dataValues.type = model.getTableName();
  const token = generateToken(user.toJSON());

  return { user, token };
};
