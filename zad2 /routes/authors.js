// authors.js

const express = require('express');
const router = express.Router();

router.get('/list', (req, res) => {
    res.send('Authors List');
});

module.exports = router;
