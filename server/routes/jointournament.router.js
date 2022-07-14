const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const axios = require('axios')
const router = express.Router();


router.post('/', (req, res) => {
    console.log(req.body);

    const sqlQuery=`
        SELECT * from tournaments 
        WHERE startgg_id = $1
        ;
    `;

    const sqlParams=[
        req.body.id
    ];

    pool.query(sqlQuery, sqlParams)
    .then((results) => {
        console.log(results.rows)

        if (results.rows.length > 0){
            const tournamentId = results.rows[0].id; 
            console.log(tournamentId);
                            //logged in user
            const userId = req.user.id;
            console.log(userId);
        
            const sqlQueryAdd = `
                INSERT INTO registrations 
                (user_id, tournament_id )
                VALUES ($1 , $2 )
            `;

            const sqlParamsAdd = [
                userId, tournamentId
            ]

            pool.query(sqlQueryAdd, sqlParamsAdd)
            .then(() => res.sendStatus(201))
            .catch((errAdd) => {
                console.log('error in registration', errAdd)
                res.sendStatus(500);
            })
            
        
        } else{
            const sqlQueryTournament = `
            INSERT INTO tournaments 
            (tournament_name, address, timezone, 
            image_url, rules, organizer_contact, startgg_id)
            VALUES ($1, $2, $3, $4, $5, $6, $7)

            returning id
            `


            const sqlParamsTournament=[
                req.body.name, req.body.venueAddress, req.body.timezone, req.body.url, 
                req.body.rules, req.body.primaryContact, req.body.id
            ]
            pool.query(sqlQueryTournament, sqlParamsTournament)
            .then((resultTournament) => {
                console.log('made it to the POST', sqlParamsTournament)
                console.log(resultTournament);

                if (resultTournament.rows[0].id){
                    console.log('=>>>>>>', resultTournament.rows[0].id);
            
                    const sqlQueryAddTournament = `
                    INSERT INTO registrations 
                    (user_id, tournament_id )
                    VALUES ($1 , $2 )
                    `
                    
                    const sqlParamsAddTournament = [
                        req.user.id, resultTournament.rows[0].id
                    ]
                

                    pool.query(sqlQueryAddTournament, sqlParamsAddTournament)
                    .then(() => res.sendStatus(201))
                    .catch((errAddTournament) => {
                        console.log('error in registration', errAddTournament)
                        res.sendStatus(500);
                    })
                }
                
              }).catch((error) => {
                console.log('Error in post', error);
                res.sendStatus(500);
              })
            
        }

    })
    .catch((err) => {
        console.log('error in joinTournament', err)
        res.sendStatus(500);
    })
  
  });

  module.exports = router;