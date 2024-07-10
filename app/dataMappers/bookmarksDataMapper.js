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
/**
 * Spupprimer une randonnée des favoris d'un utilisateur
 * @param {number} userId - ID de l'utilisateur
 * @param {number} hikeId - ID de la randonnée
 * @returns {boolean} - Succès de la suppression
 */

export const removeBookmark = async (userId, hikeId) => {
  const query = `
      DELETE FROM users_has_hikes
      WHERE users_id = $1 AND hikes_id = $2
  `;
  const values = [userId, hikeId];
  const result = await pool.query(query, values);
  return result.rowCount > 0;
};

/**
 * Route pour récupérer la liste des randonnées favorites d'un utilisateur
 * @param {number} userId - ID de l'utilisateur
 * @returns {Array} - Liste des randonnées favorites
 */

export const getBookmark = async (userId) => {
  const query = `
        SELECT 
            hikes.id, hikes.slug, hikes.title, hikes.description, hikes.pictures, hikes.difficulty, hikes.time, hikes.distance, hikes.localisation, hikes.details, 
            ST_AsGeoJSON(hikes.gps_coordinate) as gps_coordinate, hikes.created_at, hikes.updated_at
        FROM hikes
        JOIN users_has_hikes ON hikes.id = users_has_hikes.hikes_id
        WHERE users_has_hikes.users_id = $1;
    `;
  const values = [userId];
  const result = await pool.query(query, values);
  return result.rows;
};
