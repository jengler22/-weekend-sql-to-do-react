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
router.delete('/:id', (req,res) => {
    console.log(req.params);
    const deleteIndex = Number(req.params.id);
    let queryText = 'DELETE FROM "tasks" where "id" = $1';
    pool.query(queryText, [deleteIndex]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('error in delete');
        res.sendStatus(500);
    })
});

module.exports = router;
