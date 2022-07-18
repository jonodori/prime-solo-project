import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect  } from 'react';
import { useHistory } from 'react-router-dom';
import ThankYouJoin from '../ThankyouJoin/ThankyouJoin';
import swal from 'sweetalert';
import moment from 'react-moment';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tab';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import './Details.css'
import Button from '@mui/material/Button';


function Details(){
    const dispatch = useDispatch();
    const history = useHistory();
    const moment = require('moment-timezone');


    const params = useParams();
    console.log('params', params.id)


    useEffect(() => {
      dispatch({
          type: 'FETCH_DETAILS',
          payload: (params.id)
      });
  }, [params.id]);

  const tournament = useSelector(store => store.details);
  const user = useSelector(store => store.user);

  console.log('in tournament', tournament);

  const onLogin = (event) => {
    history.push('/login');
  };

// test for converting unix timestamp to date and time 
// let timestamp = 1673024400
// let date = new Date(timestamp);

// console.log(+date.getDate()+
//           "/"+(date.getMonth()+1)+
//           "/"+date.getFullYear()+
//           " "+date.getHours()+
//           ":"+date.getMinutes()+
//           ":"+date.getSeconds());

// let momentTimestamp = moment.unix(tournament.registrationClosesAt).format("DD MMM YYYY hh:mm a");


    const joinTournament = () => {
      console.log('in Details', tournament);
      dispatch({
        type: 'SET_JOIN_TOURNAMENT',
        payload: tournament
      })
      history.push(`/join`)
    }

    const fetchMap = () => {
      dispatch({
        type: 'FETCH_MAP',
      })
    }


  let url = `https://www.google.com/maps/embed/v1/place?key=AIzaSyCy5qu-Xan8_Sf0dsjL6Txa3bpGAxdzNJk&q=${tournament && tournament.venueAddress}`

    return(
        <>
        <div className="details-container">

        
        <div className="Body">
        <h3 className="title1"> {tournament && tournament.name}</h3>
        
        <img className="images" src={tournament && tournament.images[0].url} /> 
        
        <br></br>
        <iframe
              className="iframe"
              src={url}
      
              width="600"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />


        <h4>Address: {tournament && tournament.venueAddress}</h4>
        <h4>{tournament && tournament.venueName}</h4>
        {/* <h4>{tournament && tournament.city}</h4> */}
        {/* <h4>{tournament && tournament.countryCode}</h4> */}
        <h4>Start At: {tournament && moment.unix(tournament.startAt).format("MMM DD YYYY hh:mm a")}</h4>
        <h4>End At: {tournament && moment.unix(tournament.endAt).format(" MMM DD YYYY hh:mm a")}</h4>
        <h4>Timezone: {tournament && tournament.timezone}</h4>
        <h4>Registration closes at: {tournament && moment.unix(tournament.registrationClosesAt).format("MMM DD YYYY hh:mm a")}</h4>
        <h4>Attendees: {tournament && tournament.numAttendees}</h4>
        <h4>Rules:</h4><p> {tournament && tournament.rules}</p>
        <h5><a href={tournament && tournament.url }>{tournament && tournament.url }</a> </h5>
        

        {(user.id)?
        <Button variant="contained" color="secondary" type="Submit" onClick={
        // <button className="btn btn_sizeSm" onClick={
          () => {
            swal({
              title: "Are you sure you want to join this tournament?",
              icon: "warning",
              buttons: true,
              buttons: true,
            })
            .then((willJoin) => {
              if (willJoin) {
                joinTournament();
                swal("Tournament Joined!", {
                  icon: "success",
                });
              } else {
                swal("Cancelled");
              }
            });
          }
        }>  
        Join Tournament
        </Button>
        :
        <button className="btn btn_sizeSm" onClick={onLogin}>
        Login to Join Tournament
        </button>

      }
       </div>
       </div>
        </>
    )
  }


export default Details; 