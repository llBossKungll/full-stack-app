// backend/server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors()); // เพื่อให้ frontend ข้าม origin มาเรียก backend ได้
app.use(express.json());

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from Express Backend!' });
});

app.listen(PORT, () => {
  console.log(`Backend is running at http://localhost:${PORT}`);
});
