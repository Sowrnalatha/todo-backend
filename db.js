const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',           // put your MySQL Workbench password
  database: 'todo_app'    // make sure this DB exists
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL DB');
});

module.exports = db;
