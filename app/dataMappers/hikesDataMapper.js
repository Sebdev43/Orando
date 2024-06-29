import pool from "../config/clientPg.js";

export const getAllHikes = async () => {
    const result = await pool.query('SELECT * FROM "hikes"');
    return result.rows;
    console.log(result.rows);
};
