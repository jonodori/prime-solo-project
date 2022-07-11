const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const axios = require('axios')
const router = express.Router();

//grabs data for the Details page 
router.get('/:id', (req, res) => {

    const { id } = req.params;
    console.log(id )
  
    const endpoint = "https://api.start.gg/gql/alpha";
  
    const headers = {
      "content-type": "application/json",
      "Authorization": "Bearer " + process.env.API_KEY
  };
  
  const graphqlQuery = {
    "query": `
    query {
      tournaments(query: {
        perPage: 20
        filter: {
          id: "${id}"
          upcoming: true
        }
      }) {
        nodes {     
          id 
          name
          addrState
          images{
            url
          }
          venueAddress
          venueName
          city
          countryCode
          startAt
          endAt
          timezone
          isRegistrationOpen
          url(relative: false)
          rules
          numAttendees
          primaryContact
          registrationClosesAt
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
    // return the first index of the array
  res.send(response.data.data.tournaments.nodes[0])
  }).catch((err)=>{
    console.error(`${err}`);
  })
  
  });


  
  


  module.exports = router;