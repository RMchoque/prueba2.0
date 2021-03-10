const express = require('express');
const router = express.Router();

const pool = require('../database');
const { route } = require('.');


router.get('/add', (req, res) => {
    res.render('../views/links/add.hbs')

});
router.post('/add', async(req, res) => {
    const {name, email } = req.body;
    const newLink = {
        name,
        email
    };
    await pool.query('INSERT INTO links SET ? ', [newLink]);
    
    console.log(newLink);
    res.send('recibido');
});


module.exports = router;
