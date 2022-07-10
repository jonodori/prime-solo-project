import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect  } from 'react';
import { useHistory } from 'react-router-dom';

function Details(){
    const dispatch = useDispatch();
    const history = useHistory();

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

let timestamp = 1607110465663
let date = new Date(timestamp);

console.log(+date.getDate()+
          "/"+(date.getMonth()+1)+
          "/"+date.getFullYear()+
          " "+date.getHours()+
          ":"+date.getMinutes()+
          ":"+date.getSeconds());

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
        <h4>{tournament && tournament.url }</h4>

        {(user.id)?
        <button className="btn btn_sizeSm" onClick={onLogin}>
        Join Tournament
        </button> 
        :
        <button className="btn btn_sizeSm" onClick={onLogin}>
        Login
        </button>

      }
        </>
    )
  }


export default Details; 