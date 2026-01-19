const express = require("express");
const pool = require("../db");
const router = express.Router();

// POST - create contact
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: "All fields required" });
    }

    await pool.query(
      "INSERT INTO contacts (name, email, message) VALUES ($1, $2, $3)",
      [name, email, message]
    );

    res.status(201).json({ success: true });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// GET - fetch contacts
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM contacts ORDER BY created_at DESC");
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
