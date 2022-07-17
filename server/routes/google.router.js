const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const axios = require('axios')
const router = express.Router();

router.get('/', (req, res) => {

    axios({
        method: "GET",
        url: 'https://www.google.com/maps/embed/v1/place',
        params: {
            api_key: process.env.GOOGLE_API_KEY,
            
        }
    })
        .then(response => {
            console.log(response);
            res.send(response.data);
        })
        .catch(err => {
            console.error('No maps for you', err);
            res.sendStatus(500);
        });
});



module.exports = router;