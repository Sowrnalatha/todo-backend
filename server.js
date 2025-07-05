const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/tasks');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Root route so Railway knows it's alive
app.get('/', (req, res) => {
  res.send('✅ Backend is running');
});

// ✅ Middleware
app.use(cors());
app.use(bodyParser.json());

// ✅ API Routes
app.use('/tasks', taskRoutes);

// ✅ Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});

