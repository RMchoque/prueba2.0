
const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('../views/links/mmo.hbs')

});


module.exports = router;
