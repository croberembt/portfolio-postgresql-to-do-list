const Pool = require('pg').Pool;

const pool = new Pool ({
  user: 'postgres',
  password: 'Sawahcowi1$',
  host: 'localhost',
  port: 5432,
  database: 'todo_db'
}); 

module.exports = pool; 