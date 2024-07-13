
import coreDataMappers from "./coreDataMappers.js";
import pool from "../config/clientPg.js";

class usersDataMappers extends coreDataMappers {
  constructor() {
    super("users");
  }

  /**
   * Création d'un compte utilisateur
   * @param {TEXT} nickname - Pseudo de l'utilisateur
   * @param {TEXT} localisation - Département de l'utilisateur
   * @param {TEXT} email - Email de l'utilisateur soumis à un DOMAIN
   * @param {TEXT} hashedPassword - Mot de passe de l'utilisateur haché
   * @returns {Object} - Détails de la relation création d'utilisateur
   */
  async createUser(nickname, localisation, email, hashedPassword) {
    const query = `INSERT INTO users (nickname, localisation, email, password)
    VALUES ($1, $2, $3, $4) 
    RETURNING id, nickname, localisation, email, password, created_at, updated_at`;

    const values = [nickname, localisation, email, hashedPassword];
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  /**
   * Mise à jour d'un compte utilisateur
   * @param {TEXT} nickname - Pseudo de l'utilisateur
   * @param {TEXT} localisation - Département de l'utilisateur
   * @param {TEXT} email - Email de l'utilisateur soumis à un DOMAIN
   * @param {TEXT} password - Mot de passe de l'utilisateur
   * @param {id} id - ID de l'utilisateur
   * @returns {Object} - Détails de la relation création d'utilisateur
   */
  async updateUser(id, nickname, localisation, email, password) {
    const query = `UPDATE users SET nickname = $2, localisation = $3, email = $4, password = $5, updated_at = NOW() 
    WHERE id = $1
    RETURNING id, nickname, localisation, email, password, created_at, updated_at`;
    const values = [id, nickname, localisation, email, password];
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  /**
   * Obtenir un compte utilisateur
   * @param {TEXT} email - Email de l'utilisateur
   */
  async getUserByEmail(email) {
    const query = `SELECT * FROM users WHERE email =$1`;
    const values = [email];
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  /**
   * Obtenir un compte utilisateur par son pseudo
   * @param {*} nickname
   * @returns {Object} - Détails du compte de l'utilisateur
   */
  async getUserByNickname(nickname) {
    const query = `SELECT * FROM users WHERE nickname =$1`;
    const values = [nickname];
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  /**
   * Permet de mettre à jour le mot de passe haché d'un utilisateur
   * @param {*} userId
   * @param {*} hashedPassword
   */
  async updatePassword(userId, hashedPassword) {
    const query = `UPDATE users SET password = $1, updated_at = NOW() WHERE id = $2`;
    const values = [hashedPassword, userId];
    await pool.query(query, values);
  }

  /**
   * Permet de vérifier si l'email de l'utilisateur a été vérifié
   * @param {*} userId
   */
  async verifyUserEmail(userId) {
    const query = `
        UPDATE "users"
        SET "email_verified" = true
        WHERE id = $1
    `;
    const values = [userId];
    await pool.query(query, values);
  }
}

export default new usersDataMappers();
