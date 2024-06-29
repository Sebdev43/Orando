 // on importe la fonction Pool du module pg
import pg from 'pg';


const { Pool } = pg;
// Connect to PostgreSQL database
const client = new Pool({
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    //password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    port: process.env.PGPORT,
});


export default client;
client.connect((error) => {
    if (error) {
        console.error("Une erreur à lieu à la connexion avec notre BDD :",error.message);
    } else {
        console.log("Conne à la BDD réussie ! bien joué Kéké !");
    }
});