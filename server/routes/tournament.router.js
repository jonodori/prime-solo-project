const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const axios = require('axios')
const router = express.Router();

router.get('/:state', (req, res) => {

  const { state } = req.params;
  console.log('<=', state)

  const endpoint = "https://api.start.gg/gql/alpha";

  const headers = {
    "content-type": "application/json",
    "Authorization": "Bearer " + process.env.API_KEY
};

  // console.log(req.user);

  const graphqlQuery = {
      "query": `
      query {
        tournaments(query: {
          perPage: 20
          filter: {
            addrState: "${state}"
            upcoming: true
          }
        }) {
          nodes {
            venueAddress
            id
            name
            addrState
            images{
              url
            }
            city
            startAt
            endAt
          }
        }
      },
      `,

      
    }

    axios({
      url: endpoint,
      method:"POST",
      headers: headers,
      data: graphqlQuery
    }).then((response)=>{
      console.log(response.data.data.tournaments.nodes);
    res.send(response.data.data.tournaments.nodes)
    }).catch((err)=>{
      console.error(`${err}`);
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


  router.get('/', rejectUnauthenticated, (req, res) => {
    
    const sqlQuery = `
    SELECT * FROM "registrations" 
    JOIN tournaments 
    ON registrations.tournament_id = tournaments.id 
    JOIN "user" 
    ON "user".id = registrations.user_id  
    WHERE "user".id = $1
    ;`;

    const sqlParams = [req.user.id]
    console.log('In router.get', sqlParams);

      pool.query(sqlQuery, sqlParams)
        .then(result => {
          res.send(result.rows[0])
          console.log('in SQLPARAMS');
        })
        .catch(err => {
          console.error(err);
          res.sendStatus(500)
        })
  })

  module.exports = router;

