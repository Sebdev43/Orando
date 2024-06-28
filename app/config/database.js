const {Client} =require("pg"); // on importe la fonction Client du module pg

// Connect to PostgreSQL database
const client = new Client({
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    port: process.env.PGPORT
});

module.exports = client;