// books.js

const express = require('express');
const router = express.Router();

// Определение маршрута для книг
router.get('/', (req, res) => {
    res.send('Books Page');
});

module.exports = router;
