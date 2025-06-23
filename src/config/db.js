const { Pool } = require('pg');

module.exports = new Pool({
  user: 'victorsoaresho',
  password: 'senha',
  host: 'launchstore_db', 
  port: 5432, 
  database: 'launchstore'
});