import { generateToken } from "../utils/jwtUtils.js";
import jwt from "jsonwebtoken";
import * as userDataMappers from "../dataMappers/userDataMappers.js";
import { verifyPassword, hashPassword } from "../utils/passwordUtils.js";
import {
  generateEmailToken,
  sendVerificationEmail,
} from "../utils/emailUtils.js";

const secretKey = process.env.JWT_SECRET;

export const login = async (req, res) => {
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
  //const refreshToken = generateRefreshToken(user);

  res.status(200).json({ token });
};

//Fonction D'incription
export const signup = async (req, res) => {
  const { nickname, localisation, email, password } = req.body;
  try {
    if (!nickname || !localisation || !email || !password) {
      const error = new Error(
        "Il manque des informations pour créer un utilisateur !"
      );
      error.statusCode = 400;
      throw error;
    }
    // Hachage du mot de passe
    const hashedPassword = await hashPassword(password);

    // Création de l'utilisateur

    const user = await userDataMappers.createUser(
      nickname,
      localisation,
      email,
      hashedPassword
    );

    // Génération du token de vérification d'email

    const emailToken = generateEmailToken(user.id);

    // Envoi de l'email de vérification

    await sendVerificationEmail(user.email, emailToken);

    res
      .status(201)
      .json({
        message:
          "Utilisateur créé avec succès. Un email de vérification a été envoyé.",
      });
  } catch (error) {
    next(error);
  }
};

export const verifyEmail = async (req, res) => {
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
    res.status(200).json({ message: "Email vérifié avec succès." });
  } catch (error) {
    next(error);
  }
};

/*export const refreshToken = async (req, res) => {
    const { refreshToken } = req.body;

    if (!refreshToken) {
        return res.status(401).json({ error: 'Refresh token manquant' });
    }

    try {
        const user = verifyRefreshToken(refreshToken);
        const newToken = generateToken(user);
        const newRefreshToken = generateRefreshToken(user);
        res.status(200).json({ token: newToken, refreshToken: newRefreshToken });
    } catch (error) {
        res.status(403).json({ error: 'Refresh token invalide' });
    }
};*/
