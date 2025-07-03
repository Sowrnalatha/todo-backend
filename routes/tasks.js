const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all tasks
router.get('/', (req, res) => {
  db.query('SELECT * FROM tasks', (err, results) => {
    if (err) return res.status(500).send(err);
    // Convert 'status' to 'completed' for frontend
    const tasks = results.map(row => ({
      id: row.id,
      text: row.text,
      completed: !!row.status  // convert 0/1 to true/false
    }));
    res.json(tasks);
  });
});

// Add a task
router.post('/', (req, res) => {
  const { text } = req.body;
  db.query('INSERT INTO tasks (text, status) VALUES (?, ?)', [text, false], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ id: result.insertId, text, completed: false });
  });
});

// Update task completion
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;
  db.query('UPDATE tasks SET status = ? WHERE id = ?', [completed, id], (err) => {
    if (err) return res.status(500).send(err);
    res.sendStatus(200);
  });
});

// Delete task
router.delete('/:id', (req, res) => {
  db.query('DELETE FROM tasks WHERE id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).send(err);
    res.sendStatus(200);
  });
});

// Delete all tasks
router.delete('/', (req, res) => {
  db.query('DELETE FROM tasks', (err) => {
    if (err) return res.status(500).send(err);
    res.sendStatus(200);
  });
});

module.exports = router;
