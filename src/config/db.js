const { Pool } = require('pg');

module.exports = new Pool({
  user: 'postgres',
  password: 'senha',
  host: 'db',
  port: 5432,
  database: 'launchstore'
});
