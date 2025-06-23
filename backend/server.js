const express = require('express');
const { Pool } = require('pg');
const cors = require('cors'); // ถ้าใช้กับ frontend

const app = express();
const port = 3000;

app.use(cors()); // ถ้ามี frontend แยก domain
app.use(express.json());

// 👇 เชื่อมต่อ Supabase PostgreSQL
const pool = new Pool({
  connectionString: 'postgresql://postgres.skcwrgpratcwvhklqupn:partytpsby17@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres?sslmode=require',
  ssl: { rejectUnauthorized: false }
});

// 👇 สร้าง API endpoint
app.get('/employees', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM employees');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching data');
  }
});

// 👇 เริ่มรัน server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
