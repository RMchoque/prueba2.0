
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('CARLA MARANA');
});


module.exports = router;
