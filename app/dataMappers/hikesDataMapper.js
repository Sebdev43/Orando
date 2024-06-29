import pool from "../config/clientPg.js";

// Nombre de randonnées par page
const ITEMS_PER_PAGE = 10;
/**
 * Récupérer toutes les randonnées avec pagination, tri et ordre
 * @param {number} page - Numéro de la page
 * @param {string} order - Ordre de tri (asc ou desc)
 * @param {string} orderBy - Champ par lequel on trie les résultats
 * @returns {Array} - Liste des randonnées
 */
export const getAllHikes = async (page, order, orderBy) => {
  const offset = (page - 1) * ITEMS_PER_PAGE;

  // On s'assure ques les paramètres de tri et d'ordre sont sécurisés
  const safeOrder = order.toLowerCase() === "desc" ? "DESC" : "ASC";
  const safeOrderBy = [
    "id",
    "title",
    "distance",
    "difficulty",
    "time",
    "localisation",
    "created_at",
  ].includes(orderBy)
    ? orderBy
    : "id";

  // Construition de la requête SQL avec les paramètres de pagination, tri et ordre
  const query = `
        SELECT 
            id, title, description, picture, difficulty, time, distance, localisation, details, 
            ST_AsGeoJSON(gps_coordinate) as gps_coordinate, created_at, updated_at 
        FROM hikes
        ORDER BY ${safeOrderBy} ${safeOrder}
        LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

  // Exécution de la requête SQL
  const result = await pool.query(query);

  // Retourne les résultats
  return result.rows;
};
