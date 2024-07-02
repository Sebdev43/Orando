
import pool from "../config/clientPg.js";

export const createUser = async (nickname, localisation, email, password) => {
  const query = `INSERT INTO users(nickname, localisation, email, password) VALUES ($1, $2, $3, $4) RETURNING id, nickname, localisation, email, password, created_at, updated_at`;
  const values = [nickname, localisation, email, password];
  const result = await pool.query(query, values);
  console.log(email);
  return result.rows[0];
};

// export const updateUser = async (
//   id,
//   nickname,
//   localisation,
//   email,
//   password
// ) => {
//   try {
//     const query =
//       "UPDATE users SET nickname = $1, localisation = $2, email = $3, password = $4, updated_at = NOW() WHERE id = $5 RETURNING *";
//     const values = [nickname, localisation, email, password, id];
//     const result = await pool.query(query, values);
//     return result.rows[0];
//   } catch (error) {
//     throw error;
//   } finally {
//     client.release();
//   }
// };
