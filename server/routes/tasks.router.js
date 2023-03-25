const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET
router.get('/', (req, res) => {
    let queryText = 'SELECT * from tasks ORDER By task ASC;';
    pool.query(queryText).then((result) => {
        res.send(result.rows);
        }).catch((error) => {
            console.log(`Error in GET ${error}`);
            alert('something is wrong with GET');
        })
});

// POST
router.post('/', (req, res) => {
    console.log(`post`, req.body);
    let queryText = `Insert Into tasks ("task", "due") Values ($1, $2);`;
    pool.query(queryText, [req.body.task, req.body.due])
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
