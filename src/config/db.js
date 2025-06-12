const { Pool } = require('pg');

module.exports = new Pool({
  user: 'victorsoaresho',
  password: 'senha',
  host: 'db',
  port: 8226,
  database: 'launchstore'
});
