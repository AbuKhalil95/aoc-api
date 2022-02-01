import jwt from "jsonwebtoken";

// JWT signing and verification utility functions
const secret = process.env.JWT_SECRET;

export const generateToken = (infoObj) => jwt.sign({ ...infoObj }, secret);

export const verifyToken = (token) => jwt.verify(token, secret);