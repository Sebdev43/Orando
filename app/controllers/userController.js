const bcrypt = require('bcrypt');
const client = require('../config/database')//Import des régles de connexion pour PSQL

async function createUser(req, res) {
    const { nickname, localisation, email, password } = req.body;

    //const 
}