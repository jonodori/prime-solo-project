const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

router.get('/:id', rejectUnauthenticated, (req, res) => {
  console.log('router get made it here')
  const sqlQuery = `
    SELECT * 
    FROM "user"
    WHERE "id" = $1;
  `;
  console.log('in sqlParams user router', req.params);
  const sqlParams = [
    req.params.id
  ]
  
  pool.query(sqlQuery , sqlParams)
    .then((dbRes) => {
      console.log('In dbRes', dbRes)
      if (dbRes.rows.length === 0){
        res.sendStatus(404)
      } else{
        res.send(dbRes.rows[0])
      }
    })
    .catch((err) => {
      console.log('err in user gamertag', err)
      res.sendStatus(500)
    })
})

router.put('/:id/edit', rejectUnauthenticated, (req, res) => {
    console.log('<---' , req.body);  
    const sqlQuery = `
    UPDATE "user"
    SET gamertag = $1
    WHERE id = $2;
    `
    const sqlParams = [
      req.body.gamertag,
      req.user.id
      
    ]
    pool.query(sqlQuery, sqlParams)
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('Error in PUT', err);
      res.sendStatus(500);
    })
});

  
// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res, next) => {
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);
  const gamertag = req.body.gamertag;
  const email = req.body.email;

  const queryText = `INSERT INTO "user" ( username, password, gamertag, email  )
    VALUES ($1, $2, $3, $4) RETURNING id`;
  pool
    .query(queryText, [ username, password, gamertag, email])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('User registration failed: ', err);
      res.sendStatus(500);
    });
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

module.exports = router;
