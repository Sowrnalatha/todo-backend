const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/tasks');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use('/tasks', taskRoutes);

// ✅ Add this route to confirm server is alive
app.get('/', (req, res) => {
  res.send('✅ Backend is running');
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
