import { generateRefreshToken, generateToken, verifyRefreshToken } from "../utils/jwtUtils.js";
import jwt from "jsonwebtoken";
import { usersDataMappers } from "../dataMappers/index.dataMappers.js";
import { verifyPassword, hashPassword } from "../utils/passwordUtils.js";
import { revokeToken } from "../utils/node-Cache.js";
import {
  generateEmailToken,
  sendVerificationEmail,
  sendResetPasswordEmail,
} from "../utils/emailUtils.js";
import { validationResult } from "express-validator";

const secretKey = process.env.JWT_SECRET;

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
      return res.status(400).json({
          status: "error",
          message: "Données de requête invalides",
          errors: errors.array(),
      });
  }

  try {
      const user = await usersDataMappers.getUserByEmail(email);

      if (!user) {
          return res.status(401).json({
              status: "error",
              message: "Email ou mot de passe incorrect",
          });
      }

      if (!user.email_verified) {
          return res.status(403).json({
              status: "error",
              message: "Email non vérifié.",
          });
      }

      const isPasswordValid = await verifyPassword(password, user.password);
      if (!isPasswordValid) {
          return res.status(401).json({
              status: "error",
              message: "Email ou mot de passe incorrect",
          });
      }

      const ip = req.ip;
      const userAgent = req.headers['user-agent'];
      const token = generateToken(user, ip, userAgent);
      const refreshToken = generateRefreshToken(user);

      res.cookie('refreshToken', refreshToken, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'Strict',
          maxAge: 7 * 24 * 60 * 60 * 1000 // 7 jours
      });

      return res.status(200).json({ token });
  } catch (error) {
      next(error);
  }
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
    const existingEmailUser = await usersDataMappers.getUserByEmail(email);
    if (existingEmailUser) {
      return res.status(409).json({
        status: "error",
        message: "Adresse email déjà utilisée",
        emailExists: true,
      });
    }

    const existingNicknameUser = await usersDataMappers.getUserByNickname(
      nickname
    );
    if (existingNicknameUser) {
      return res.status(409).json({
        status: "error",
        message: "Le pseudo est déjà utilisé",
        nicknameExists: true,
      });
    }

    const hashedPassword = await hashPassword(password);
    const user = await usersDataMappers.createUser(
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

    const user = await usersDataMappers.findById(userId);
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
    await usersDataMappers.verifyUserEmail(userId);
    return res.status(200).json({ message: "Email vérifié avec succès." });
  } catch (error) {
    next(error);
  }
};

export const forgotPassword = async (req, res, next) => {
  const { email } = req.body;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      status: "error",
      message: "Données de requête invalides",
      errors: errors.array(),
    });
  }

  try {
    const user = await usersDataMappers.getUserByEmail(email);
    if (user) {
      const resetToken = generateEmailToken(user.id);
      await sendResetPasswordEmail(user.email, resetToken);
    }
    // répondre toujours avec le même message pour des raisons de sécurité
    return res.status(200).json({
      message: "Si l'adresse email existe, un email de réinitialisation de mot de passe a été envoyé.",
    });
  } catch (error) {
    next(error);
  }
};

export const resetPassword = async (req, res, next) => {
  const { token, newPassword } = req.body;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      status: "error",
      message: "Données de requête invalides",
      errors: errors.array(),
    });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    const userId = decoded.userId;

    const hashedPassword = await hashPassword(newPassword);
    await usersDataMappers.updatePassword(userId, hashedPassword);

    return res.status(200).json({ message: "Mot de passe réinitialisé avec succès." });
  } catch (error) {
    return res.status(403).json({ error: "Token invalide ou expiré." });
  }
};

export const getConnectionPage = (req, res) => {
  res.sendFile("createAccount.html", { root: "public" });
};

export const refreshToken = async (req, res, next) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
      return res.status(401).json({ error: 'Refresh token manquant' });
  }

  try {
      const decoded = verifyRefreshToken(refreshToken);
      const user = await usersDataMappers.findById(decoded.userId);

      if (!user) {
          return res.status(401).json({ error: 'Utilisateur non trouvé' });
      }

      const ip = req.ip;
      const userAgent = req.headers['user-agent'];
      const newToken = generateToken(user, ip, userAgent);
      const newRefreshToken = generateRefreshToken(user);

      res.cookie('refreshToken', newRefreshToken, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'Strict',
          maxAge: 7 * 24 * 60 * 60 * 1000 // 7 jours
      });

      return res.status(200).json({ token: newToken });
  } catch (error) {
      next(error);
  }
};

export const logout = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const refreshToken = req.cookies.refreshToken;

  if (authHeader) {
      const token = authHeader.split(' ')[1];

      try {
          await revokeToken(token);
          res.clearCookie('refreshToken');
          return res.status(200).json({ message: 'Déconnexion réussie' });
      } catch (error) {
          next(error);
      }
  } else {
      res.status(401).json({ error: 'Token manquant' });
  }
};