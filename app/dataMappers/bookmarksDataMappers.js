import pool from "../config/clientPg.js";
import coreDataMappers from "./coreDataMappers.js";

class bookmarksDataMappers extends coreDataMappers {
  constructor() {
    super("users_has_hikes");
  }

  /**
 * Ajouter une randonnée dans les favoris d'un utilisateur
 * @param {number} userId - ID de l'utilisateur
 * @param {number} hikeId - ID de la randonnée
 * @returns {Object} - Détails de la relation du favoris
 */
  async addBookmark(userId, hikeId) {
    const query = `
    WITH inserted AS (
      INSERT INTO users_has_hikes (users_id, hikes_id)
      VALUES ($1, $2)
      ON CONFLICT (users_id, hikes_id) DO NOTHING
      RETURNING hikes_id
    )
    SELECT 
      h.id, h.slug, h.title, h.description, h.pictures, h.difficulty, h.time, h.distance, 
      h.localisation, h.details, ST_AsGeoJSON(h.gps_coordinate) as gps_coordinate, 
      h.created_at, h.updated_at
    FROM inserted
    JOIN hikes h ON h.id = inserted.hikes_id;
  `;
    const values = [userId, hikeId];
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  /**
 * Spupprimer une randonnée des favoris d'un utilisateur
 * @param {number} userId - ID de l'utilisateur
 * @param {number} hikeId - ID de la randonnée
 * @returns {boolean} - Succès de la suppression
 */
  async removeBookmark(userId, hikeId) {
    const query = `
      DELETE FROM users_has_hikes
      WHERE users_id = $1 AND hikes_id = $2
  `;
    const values = [userId, hikeId];
    const result = await pool.query(query, values);
    return result.rowCount > 0;
  }

  /**
 * Route pour récupérer la liste des randonnées favorites d'un utilisateur
 * @param {number} userId - ID de l'utilisateur
 * @returns {Array} - Liste des randonnées favorites
 */
  async getBookmark(userId) {
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
  }



  /**
   * Supprime un utilisateur et ses bookmarks associés
   * @param {number} userId - ID de l'utilisateur à supprimer
   * @returns {boolean} - Retourne true si l'utilisateur a été supprimé
   */

};
export default new bookmarksDataMappers();


