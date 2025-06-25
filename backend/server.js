// backend/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

app.get('/employees', async (req, res) => {
  const { data, error } = await supabase.from('employees').select('*');
  if (error) return res.status(500).json(error);
  res.json(data);
});

app.listen(port, () => {
  console.log(`✅ Backend ready at http://localhost:${port}`);
});
