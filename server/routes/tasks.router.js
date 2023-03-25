const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET

// POST
router.post('/', (req, res) => {
    console.log(`post`, req.body);
    let queeryText = `Insert Into tasks ("task", "due") Values ($1, $2);`;
    pool.query(queeryText, [req.body.task, req.body.due])
    .then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log(`Error in POST ${error}`);
        res.sendStatus(550);
    })
});
    

// PUT

// DELETE

module.exports = router;
