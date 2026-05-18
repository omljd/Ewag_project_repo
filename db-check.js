import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

async function check() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME || 'ewag_db'
  });
  
  const [rows] = await connection.query('SELECT * FROM consultations');
  console.log('Consultations:', rows);
  connection.end();
}
check();
