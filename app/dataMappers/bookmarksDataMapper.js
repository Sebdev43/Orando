import pool from "../config/clientPg.js";

/**
 * Ajouter une randonnée dans les favoris d'un utilisateur
 * @param {number} userId - ID de l'utilisateur
 * @param {number} hikeId - ID de la randonnée
 * @returns {Object} - Détails de la relation du favoris
 */

export const addBookmark = async (userId, hikeId) => {
  const query = `
      INSERT INTO users_has_hikes (users_id, hikes_id)
      VALUES ($1, $2)
      RETURNING id, users_id, hikes_id, created_at, updated_at;
  `;
  const values = [userId, hikeId];
  const result = await pool.query(query, values);
  return result.rows[0];
};

