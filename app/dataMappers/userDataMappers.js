import pool from "../config/clientPg.js";

/**
 * Création d'un compte utilisateur
 * @param {TEXT} nickname - Pseudo de l'utilisateur
 * @param {TEXT} localisation - Département de l'utilisateur
 * @param {TEXT} email - Email de l'utilisateur soumis à un DOMAIN
 * @param {TEXT} password - Mot de passe de l'utilisateur
 * @returns {Object} - Détails de la relation création d'utilisateur
 */

export const createUser = async (nickname, localisation, email, hashedPassword) => {
 
  const query = `INSERT INTO users (nickname, localisation, email, password)
   VALUES ($1, $2, $3, $4) 
   RETURNING id, nickname, localisation, email, password, created_at, updated_at`;

  const values = [nickname, localisation, email, hashedPassword];
  const result = await pool.query(query, values);
  return result.rows[0];
};

/**
 * Mise à jour d'un compte utilisateur
 * @param {TEXT} nickname - Pseudo de l'utilisateur
 * @param {TEXT} localisation - Département de l'utilisateur
 * @param {TEXT} email - Email de l'utilisateur soumis à un DOMAIN
 * @param {TEXT} password - Mot de passe de l'utilisateur
 * @param {id} id - ID de l'utilisateur
 * @returns {Object} - Détails de la relation création d'utilisateur
 */

export const updateUser = async (id, nickname, localisation, email, password) => {
    const query =
      `UPDATE users SET nickname = $2, localisation = $3, email = $4, password = $5, updated_at = NOW() 
      WHERE id = $1
      RETURNING id, nickname, localisation, email, password, created_at, updated_at`;
    const values = [id, nickname, localisation, email, password];
    const result = await pool.query(query, values);
    return result.rows[0];
};

/**
 * Obtenir un compte utilisateur
 * @param {id} id - ID de l'utilisateur
 */

export const getUserById = async (id) => {
  const query = `SELECT * FROM users WHERE id =$1`;
    const values = [id];
    const result = await pool.query(query, values);
    return result.rows[0];
};

/**
 * Obtenir un compte utilisateur
 * @param {id} id - ID de l'utilisateur
 */

export const deleteUser = async (id) => {
  try {
    const query = `DELETE FROM users WHERE id = $1`;
    const result = await pool.query(query, [id]);
    return result.rowCount > 0;
  } catch (error) {
    console.error("Erreur lors de la suppresion de l'utilisateur :", error);
    throw error;
  }
};

/**
 * Obtenir un compte utilisateur
 * @param {TEXT} email - Email de l'utilisateur
 */

export const getUserByEmail = async (email) => {
  const query = `SELECT * FROM users WHERE email =$1`;
    const values = [email];
    const result = await pool.query(query, values);
    return result.rows[0];
};


export const verifyUserEmail = async (userId) => {
  const query = `
    UPDATE "users"
    SET "email_verified" = true
    WHERE id = $1
    `;
  const values = [userId];
  await pool.query(query, values);
  
};
// à faire le login qui vérifie les identifiants renseigner sur le sujet si c'est bon un booleun true or false et obtiens le jwt . Sécurité qui doit etre au top pour éviter les injections etc dans la BD
// Un delete user pour la suppréssion d'un compte

// Pour Bcrypt ( à voir avec scrypt comment ça fonctionne) lors de l'authentification d'un utilisateur, il faut comparer le mot de passe en clair avec le mot de passe haché enregistré dans la base de données. Pour cela, on utilise la méthode compare de Bcrypt. Cette méthode prend en paramètre le mot de passe en clair et le mot de passe haché et retourne un booléen. Si les deux mots de passe correspondent, la méthode retourne true, sinon elle retourne false. Voici un exemple d'utilisation de la méthode compare de Bcrypt :