import pg from 'pg'; 
//On import toutes les fonctions de PG pour utiliser pool
const { Pool } = pg;
// Connect to PostgreSQL database
const pool = new Pool({
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    //password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    port: process.env.PGPORT
});

export default client;
pool.connect((error) => {
    if (error) {
        console.error("Une erreur à lieu à la connexion avec notre BDD :",error.message);
    } else {
        console.log("Connection à la BDD réussie ! bien joué Kéké !");
    }
});