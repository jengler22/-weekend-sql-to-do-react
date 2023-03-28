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
    console.log('POST request');
    let tasksToDo = req.body;
    let queryText = `Insert Into chores ("task", "finished") VALUES ($1, $2);`
    pool.query(queryText, [tasksToDo.task, tasksToDo.finished])
      .then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log(`Error in POST ${error}`);
        res.sendStatus(500);
    })
});
    

// PUT
router.put('/:id', (req, res) => {
    console.log( `In PUT request /chores` );
    let taskId = req.params.id;
    let queryText = 'UPDATE "chores" SET "finished" = $1 WHERE "id" = $2;';

    pool.query(queryText, [ 'yes', taskId ]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log( `Error in PUT ${error}`)
        res.sendStatus(500);
    })
})

// DELETE
router.delete('/:id', (req,res) => {
    console.log(req.params.id);
    const deleteIndex = Number(req.params.id);
    let queryText = `DELETE FROM "chores" where "id" = $1;`;
    pool.query(queryText, [deleteIndex]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('error in delete');
        res.sendStatus(500);
    })
});

module.exports = router;
