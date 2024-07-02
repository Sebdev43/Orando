import pool from "../config/clientPg.js";

/**
 * Création d'un compte utilisateur
 * @param {TEXT} nickname - Pseudo de l'utilisateur
 * @param {TEXT} localisation - Département de l'utilisateur
 * @param {TEXT} email - Email de l'utilisateur soumis à un DOMAIN
 * @param {TEXT} password - Mot de passe de l'utilisateur
 * @returns {Object} - Détails de la relation création d'utilisateur
 */

export const createUser = async (nickname, localisation, email, password) => {
  const query = `INSERT INTO users(nickname, localisation, email, password) VALUES ($1, $2, $3, $4) RETURNING id, nickname, localisation, email, password, created_at, updated_at`;
  const values = [nickname, localisation, email, password];
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
