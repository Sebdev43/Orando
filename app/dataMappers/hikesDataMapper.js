import pool from "../config/clientPg.js";

export const getAllHikes = async () => {
    const result = await pool.query('SELECT id, title, description, picture, difficulty, time, distance, localisation, details, ST_AsGeoJSON(gps_coordinate) as gps_coordinate, created_at, updated_at FROM hikes');
    return result.rows;
};
