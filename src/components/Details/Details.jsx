import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect  } from 'react';
import { useHistory } from 'react-router-dom';
import ThankYouJoin from '../ThankyouJoin/ThankyouJoin';
import swal from 'sweetalert';
import moment from 'react-moment';



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
let timestamp = 1673024400
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

    return(
        <>
        <h3>{tournament && tournament.name}</h3>
        
        <img className="imagee" src={tournament && tournament.images[0].url} /> 
        <h4>Address: {tournament && tournament.venueAddress}</h4>
        <h4>{tournament && tournament.venueName}</h4>
        {/* <h4>{tournament && tournament.city}</h4> */}
        {/* <h4>{tournament && tournament.countryCode}</h4> */}
        <h4>Start At: {tournament && moment.unix(tournament.startAt).format("MMM DD YYYY hh:mm a")}</h4>
        <h4>End At: {tournament && moment.unix(tournament.endAt).format(" MMM DD YYYY hh:mm a")}</h4>
        <h4>Timezone: {tournament && tournament.timezone}</h4>
        <h4>Registration closes at: {tournament && moment.unix(tournament.registrationClosesAt).format("MMM DD YYYY hh:mm a")}</h4>
        <h4>Rules:</h4><p> {tournament && tournament.rules}</p>
        <h5><a href={tournament && tournament.url }>{tournament && tournament.url }</a> </h5>
        

        {(user.id)?
        
        <button className="btn btn_sizeSm" onClick={
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
        </button> 
        :
        <button className="btn btn_sizeSm" onClick={onLogin}>
        Login to Join Tournament
        </button>

      }
        </>
    )
  }


export default Details; 