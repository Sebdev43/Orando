import { usersDataMappers } from "../dataMappers/index.dataMappers.js";
import { validationResult } from "express-validator";
import { verifyPassword, hashPassword } from "../utils/passwordUtils.js";

export const updateUser = async (req, res, next) => {
  try {
      const userId = req.user.id; 
      const { nickname, localisation, email, currentPassword, newPassword } = req.body;

      let user = await usersDataMappers.findById(userId);
      if (!user) {
          return res.status(404).json({
              status: "error",
              message: "Utilisateur non trouvé",
          });
      }

      if (newPassword) {
          if (!currentPassword) {
              return res.status(400).json({
                  status: "error",
                  message: "Le mot de passe actuel est requis pour changer le mot de passe",
              });
          }
          const isPasswordValid = await verifyPassword(currentPassword, user.password);
          if (!isPasswordValid) {
              return res.status(400).json({
                  status: "error",
                  message: "Le mot de passe actuel est incorrect",
              });
          }
          const hashedNewPassword = await hashPassword(newPassword);
          await usersDataMappers.updatePassword(userId, hashedNewPassword);
      }

      if (nickname || localisation || email) {
          user = await usersDataMappers.updateUser(userId, nickname, localisation, email, user.password);
      }

      const filteredUser = {
          nickname: user.nickname,
          localisation: user.localisation,
          email: user.email,
      };

      return res.status(200).json({
          message: "Utilisateur mis à jour avec succès",
          filteredUser,
      });
  } catch (error) {
      next(error);
  }
};

export const getUserById = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const user = await usersDataMappers.findById(userId);

    if (!user) {
      const error = new Error("Utilisateur non trouvé");
      error.statusCode = 404;
      throw error;
    } else {
      //Filtrage des champs à renvoyer
      const filteredUser = {
        nickname: user.nickname,
        localisation: user.localisation,
        email: user.email,
      };
      return res.status(200).json(filteredUser);
    }
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  const userId = req.user.id;

  try {
    const success = await usersDataMappers.deleteById(userId);
    if (success) {
      return res
        .status(200)
        .json({ message: "L'utilisateur à été supprimé avec succès" });
    } else {
      const error = new Error("L'utilisateur n'a pas pu être supprimé");
      error.statusCode = 400;
      throw error;
    }
  } catch (error) {
    next(error);
  }
};
