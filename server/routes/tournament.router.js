const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');

const router = express.Router();

router.post('/', (req, res) => {
  
    const sqlQuery=`
    INSERT INTO "tournaments" (name, primary_contact, start_date, end_date, city, rules, prizes,
        details)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8);
    `;
    console.log('')
    const sqlParams=[req.body.name, req.body.primary_contact, req.body.start_date, 
        req.body.end_date, req.body.city, req.body.rules, req.body.prizes, req.body.details 
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

