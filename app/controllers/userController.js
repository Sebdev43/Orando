import * as userDataMappers from "../dataMappers/userDataMappers.js";

export const updateUser = async (req, res) => {
  try {
    const userId = req.user.id;
    const { nickname, localisation, email, password } = req.body;

    if (!nickname || !localisation || !email || !password) {
      const error = new Error(
        "Il manque des informations pour modifier l'utilisateur !"
      );
      error.statusCode = 400;
      throw error;
    }

    const user = await userDataMappers.updateUser(
      userId,
      nickname,
      localisation,
      email,
      password
    );

    //Filtrage des champs à renvoyer
    const filteredUser = {
        nickname: user.nickname,
        localisation: user.localisation,
        email: user.email,
    };

    return res
      .status(200)
      .json({
        message: "Utilisateur mis à jour avec succès",
        filteredUser
      });
  } catch (error) {
    next(error);
  }
};

export const getUserById = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await userDataMappers.getUserById(userId);

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

export const deleteUser = async (req, res) => {
  const userId = req.user.id;

  try {
    const success = await userDataMappers.deleteUser(userId);
    if (success) {
      res
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
