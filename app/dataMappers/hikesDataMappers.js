import pool from "../config/clientPg.js";
import coreDataMappers from "./coreDataMappers.js";

class hikesDataMappers extends coreDataMappers {
  constructor() {
    super("hikes");
  }

  /**
   * Retourne toutes les randonnées avec Postgis il faut transformer le gps_coordinate en GeoJSON
   * @returns {Array} - Liste des randonnées
   */
  async getAllHikes() {
    const query = `
        SELECT 
            id, slug, title, description, pictures, difficulty, time, distance, localisation, details, 
            ST_AsGeoJSON(gps_coordinate) as gps_coordinate, created_at, updated_at 
        FROM hikes
    `;
    const result = await pool.query(query);
    return result.rows;
  }
  /**
   * Retourne toutes les randonnées avec pagination
   * @param {*} page
   * @param {*} itemsPerPage
   * @returns {Array} - Liste des randonnées
   */
  async getAllHikesPages(page, itemsPerPage = 10) {
    const offset = (page - 1) * itemsPerPage;
    const query = `
        SELECT 
            id, slug, title, description, pictures, difficulty, time, distance, localisation, details, 
            ST_AsGeoJSON(gps_coordinate) as gps_coordinate, created_at, updated_at 
        FROM hikes
        ORDER BY created_at DESC
        LIMIT $1 OFFSET $2
    `;
    const values = [itemsPerPage, offset];
    const result = await pool.query(query, values);
    return result.rows;
}

  /**
   * Retourne quatre randonnées de manière aléatoires
   * @param {*} limit
   * @returns {Array} - Liste des 4 randonnées aléatoires
   */
  async getRandomHikes(limit = 4) {
    const query = `
        SELECT 
            id, slug, title, description, pictures, difficulty, time, distance, localisation, details, 
            ST_AsGeoJSON(gps_coordinate) as gps_coordinate, created_at, updated_at 
        FROM hikes
        ORDER BY RANDOM()
        LIMIT $1
    `;
    const values = [limit];
    const result = await pool.query(query, values);

    return result.rows;
  }
  /**
   * Retourne une randonnée par son ID
   * @param {*} id
   * @returns {Object} - Détails de la randonnée
   */
  async getHikeById(id) {
    const query = `
        SELECT 
            id, slug, title, description, pictures, difficulty, time, distance, localisation, details, 
            ST_AsGeoJSON(gps_coordinate) as gps_coordinate, created_at, updated_at 
        FROM hikes 
        WHERE id = $1
    `;
    const values = [id];
    const result = await pool.query(query, values);
    return result.rows[0];
  }
}

export default new hikesDataMappers();
