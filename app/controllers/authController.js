import { generateToken } from "../utils/jwtUtils.js";
import jwt from "jsonwebtoken";
import * as userDataMappers from "../dataMappers/userDataMappers.js";
import { verifyPassword, hashPassword } from "../utils/passwordUtils.js";
import {
  generateEmailToken,
  sendVerificationEmail,
} from "../utils/emailUtils.js";
import { validationResult } from "express-validator";

const secretKey = process.env.JWT_SECRET;

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await userDataMappers.getUserByEmail(email);

  if (!user) {
    const error = new Error("Email invalide");
    error.statusCode = 401;
    throw error;
  }
  if (!user.email_verified) {
    const error = new Error("Email non vérifié");
    error.statusCode = 401;
    throw error;
  }

  const isPasswordValid = await verifyPassword(password, user.password);
  if (!isPasswordValid) {
    const error = new Error("Email ou mot de passe incorrect");
    error.statusCode = 401;
    throw error;
  }

  const token = generateToken(user);

  return res.status(200).json({ token });
};

//Fonction D'incription
export const signup = async (req, res, next) => {
  const { nickname, localisation, email, password } = req.body;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      status: "error",
      message: "Données de requête invalides",
      errors: errors.array(),
    });
  }
  try {
    const hashedPassword = await hashPassword(password);
    const user = await userDataMappers.createUser(
      nickname,
      localisation,
      email,
      hashedPassword
    );
    const emailToken = generateEmailToken(user.id);
    await sendVerificationEmail(user.email, emailToken);

    return res.status(201).json({
      message:
        "Utilisateur créé avec succès. Un email de vérification a été envoyé.",
    });
  } catch (error) {
    next(error);
  }
};

export const verifyEmail = async (req, res, next) => {
  try {
    const { token } = req.query;
    const decoded = jwt.verify(token, secretKey);
    const userId = decoded.userId;

    const user = await userDataMappers.getUserById(userId);
    if (!user) {
      const error = new Error("Utilisateur introuvable");
      error.statusCode = 400;
      throw error;
    }
    if (user.emailVerified) {
      const error = new Error("Email déjà vérifié");
      error.statusCode = 400;
      throw error;
    }
    await userDataMappers.verifyUserEmail(userId);
    return res.status(200).json({ message: "Email vérifié avec succès." });
  } catch (error) {
    next(error);
  }
};

/*export const refreshToken = async (req, res) => {
    const { refreshToken } = req.body;
    try {
        const user = verifyRefreshToken(refreshToken);
        const newToken = generateToken(user);
        const newRefreshToken = generateRefreshToken(user);
        res.status(200).json({ token: newToken, refreshToken: newRefreshToken });
    } catch (error) {
        res.status(403).json({ error: 'Refresh token invalide' });
    }
};*/

export const getConnectionPage = (req, res) => {
  res.sendFile("createAccount.html", { root: "public" });
};
