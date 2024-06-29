import client from "../config/clientPg.js";

export const getAllHikes = async () => {
    const result = await client.query('SELECT * FROM "hikes"');
    return result.rows;
    console.log(result.rows);
};
