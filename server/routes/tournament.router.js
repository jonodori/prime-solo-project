const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
  // YOUR CODE HERE
 
  const sqlQuery = `
  SELECT * 
      FROM tournaments
      JOIN class
      `;
  

  pool.query(sqlQuery)
  .then( result => {
      console.log('result.rows', result.rows)

    res.send(result.rows);
  })
  .catch(err => {
    console.log('ERROR in GET', err);
    res.sendStatus(500)
  })    
});

router.post('/', (req, res) => {
  
    const sqlQuery=`
    INSERT INTO "tournaments" (tournament_name, primary_contact, start_date, end_date, zip_code, logo, rules, prizes,
        details, game)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);
    `;
    console.log('')
    const sqlParams=[req.body.name, req.body.primaryContact, req.body.startDate, 
        req.body.endDate, req.body.zipcode, req.body.logo, req.body.rules, req.body.prizes, req.body.details,
        req.body.game
        ];
  
    pool.query(sqlQuery, sqlParams)
      .then(() => {
        console.log('made it to the POST', sqlParams)
        res.sendStatus(201)
      }).catch((error) => {
        console.log('Error in post', error);
        res.sendStatus(500);
      })
  
  });

  module.exports = router;

