const express = require('express');
const router = express.Router();

const pool = require('../database');
const { route } = require('.');


router.get('/add', (req, res) => {
    res.render('../views/links/add.hbs')

});
router.post('/add', async (req, res) => {
    const {title, url, description } = req.body;
    const newLink = {
        title,
        url,
        description
    };
    pool.query('INSERT INTO links SET ?',[newLink]);
    console.log(newLink);
    res.send('recibido');
});


module.exports = router;
