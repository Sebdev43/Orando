import pool from "../config/clientPg.js";

export const getAllHikes = async () => {
  const query = `
        SELECT 
            id, slug, title, description, pictures, difficulty, time, distance, localisation, details, 
            ST_AsGeoJSON(gps_coordinate) as gps_coordinate, created_at, updated_at 
        FROM hikes
    `;

  // Exécution de la requête SQL
  const result = await pool.query(query);

  // Retourne les résultats
  return result.rows;
};
// Nombre de randonnées par page
const ITEMS_PER_PAGE = 10;
/**
 * Récupérer toutes les randonnées avec pagination, tri par date de création
 * @param {number} page - Numéro de la page
 * @returns {Array} - Liste des randonnées
 */
export const getAllHikesPages = async (page) => {
  const offset = (page - 1) * ITEMS_PER_PAGE;

  // Construition de la requête SQL avec les paramètres de pagination et trié par date de sortie
  const query = `
        SELECT 
            id, slug, title, description, pictures, difficulty, time, distance, localisation, details, 
            ST_AsGeoJSON(gps_coordinate) as gps_coordinate, created_at, updated_at 
        FROM hikes
        ORDER BY created_at DESC
        LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

  // Exécution de la requête SQL
  const result = await pool.query(query);

  // Retourne les résultats
  return result.rows;
};
/**
 * Récupérer une randonnée par son ID
 * @param {number} id - ID de la randonnée
 * @returns {Object} - Détails de la randonnée
 */
// Récupere une randonnée par son id avec gps_coordinate en GeoJSON
export const getHikeById = async (id) => {
  const result = await pool.query(
    `
        SELECT
             id, slug, title, description, pictures, difficulty, time, distance, localisation, details, 
            ST_AsGeoJSON(gps_coordinate) as gps_coordinate, created_at, updated_at 
        FROM hikes 
        WHERE id = $1
        `,
    [id]
  );
  return result.rows[0];
};

/**
 * Récupérer 4 randonnées de manière aléatoire
 * @returns {Array} - Liste des 4 randonnées aléatoires
 */

export const getRandomHikes = async () => {
  const query = `
    SELECT 
        id, slug, title, description, pictures, difficulty, time, distance, localisation, details, 
        ST_AsGeoJSON(gps_coordinate) as gps_coordinate, created_at, updated_at 
    FROM hikes
    ORDER BY RANDOM()
    LIMIT 4
`;
  const result = await pool.query(query);

  return result.rows;
};
