require('dotenv').config();

const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.PG_USER,
  database: process.env.PG_DB,
  password: process.env.PG_PASSWORD,
});

module.exports = {
  query: ((text, params, cb) => (
    pool.query(text, params, cb)
  )),
};
