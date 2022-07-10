import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect  } from 'react';


function Details(){
    const dispatch = useDispatch();
    const params = useParams();
    console.log('params', params.id)


    useEffect(() => {
      dispatch({
          type: 'FETCH_DETAILS',
          payload: (params.id)
      });
  }, [params.id]);

  const tournament = useSelector(store => store.details)
  console.log('in tournament', tournament);

    return(
        <>
        <h3>{tournament && tournament.name}</h3>
        
        <img src={tournament && tournament.images[0].url} /> 
        <h4>{tournament && tournament.venueAddress}</h4>
        <h4>{tournament && tournament.venueName}</h4>
        <h4>{tournament && tournament.city}</h4>
        <h4>{tournament && tournament.countryCode}</h4>
        <h4>{tournament && tournament.startAt}</h4>
        <h4>{tournament && tournament.timezone}</h4>
        <h4>{tournament && tournament.isRegistrationOpen}</h4>
        <p>{tournament && tournament.rules}</p>
        {/* <h4>{tournament && tournament.url }</h4> */}
        </>
    )
  }


export default Details; 