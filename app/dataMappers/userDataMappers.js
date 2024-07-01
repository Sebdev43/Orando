import pool from '../config/clientPg.js';

export const createUser = async (nickname, localisation, email, password) => {
    const client = await pool.connect();
    try {
        const query = 'INSERT INTO users (nickname, localisation, email, password) VALUES ($1, $2, $3, $4) RETURNING *';
        const values = [nickname, localisation, email, password];
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        throw error;
    } finally {
        client.release();
    }
};

