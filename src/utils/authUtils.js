import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../config/index.js";

export const hashPassword = async (password) => {
    const pepper = config.pepper;
    const pepperedPassword = password + pepper;
    return await bcrypt.hash(pepperedPassword, 10);
};

export const verifyPassword = async (password, hashedPassword) => {
    const pepper = config.pepper;
    const pepperedPassword = password + pepper;
    return await bcrypt.compare(pepperedPassword, hashedPassword);
};

export const generateToken = (payload) => {
    return jwt.sign(payload, config.jwtSecret, { expiresIn: config.jwtExpiresIn });
};

export const verifyToken = (token) => {
    return jwt.verify(token, config.jwtSecret);
};
