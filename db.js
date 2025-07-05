const mysql = require('mysql2');
const dbUrl = new URL(process.env.DATABASE_URL);

const db = mysql.createConnection({
  host: dbUrl.hostname,
  user: dbUrl.username,
  password: dbUrl.password,
  database: dbUrl.pathname.replace('/', ''),
  port: dbUrl.port
});

db.connect((err) => {
  if (err) {
    console.error('❌ MySQL connection failed:', err);
    return;
  }else{
  console.log('✅ Connected to Railway MySQL Database');
  }
});

module.exports = db;
