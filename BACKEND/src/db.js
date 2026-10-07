const { Pool } = require("pg");
require("dotenv").config();

// Construcción dinámica recomendada por SonarQube para evitar textos planos
const connectionString = `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

const pool = new Pool({ connectionString });

module.exports = { pool };
