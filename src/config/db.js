const { Pool } = require('pg');

module.exports = new Pool({
  user: 'victorsoaresho',
  password: 'senha',
  host: 'db',
  port: 8226, // Corrigido de 8226 para 5432
  database: 'launchstore'
});