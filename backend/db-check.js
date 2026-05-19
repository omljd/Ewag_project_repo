import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '.env') });

async function check() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || 'root',
      database: process.env.DB_NAME || 'ewag_db'
    });
    
    const [rows] = await connection.query('SELECT * FROM consultations');
    console.log('✅ Consultations in DB:', rows);
    connection.end();
  } catch (error) {
    console.error('❌ Error checking database:', error);
  }
}
check();
