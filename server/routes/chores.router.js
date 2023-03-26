const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET
router.get('/', (req, res) => {
    console.log( 'GET request made for /chores' );
    let queryText = 'SELECT * FROM chores;';

    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log( `Error in GET ${error}` );
        alert(`Something went wrong.`);
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
router.put('/:id', (req, res) => {
    console.log( `In PUT request /list` );
    let itemId = req.params.id;
    let queryText = 'UPDATE "tasks" SET "complete" = $1 WHERE "id" = $2;';

    pool.query(queryText, [ 'Complete', itemId ]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log( `Error in PUT ${error}`)
    })
})

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
