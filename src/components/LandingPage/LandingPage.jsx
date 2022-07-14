import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';
import { useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Details from '../Details/Details';
import moment from 'react-moment';




// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';



function LandingPage() {
  const moment = require('moment-timezone');

  const tournaments = useSelector(store => store.tournamentList);

  const history = useHistory();

  
  const [state, setState] = useState('');

  const dispatch = useDispatch();

  

  const onLogin = (event) => {
    history.push('/login');
  };


  const fetchTournaments = (evt) => {
    evt.preventDefault();
    dispatch({
      type: 'FETCH_TOURNAMENTS',
      payload: 
        state
      
    })
  }

  const details = (id) => {
    
    history.push('/details/:id')
  }
  
  // const startAtTimestamp = new Date(tournament.startAt)
  //           const startAt = (+startAtTimestamp.getDate()+
  //           "/"+(startAtTimestamp.getMonth()+1)+
  //           "/"+startAtTimestamp.getFullYear()+
  //           " "+startAtTimestamp.getHours()+
  //           ":"+startAtTimestamp.getMinutes()+
  //           ":"+startAtTimestamp.getSeconds());

  return (
    <>
    <h2>LocalE-sports</h2>
    <form onSubmit={fetchTournaments}>

      <br></br>
   
      <input type="text" id="state"
      value={state} 
      placeholder="State" 
      onChange={(event) => setState(event.target.value.toUpperCase())}
      />
        
      <button type="Submit">Submit</button>
      </form>

      
      <h3>Local Tournaments</h3>
      
    
<table>
<thead>
    <tr>
    
    <th>tournament name</th>
    <th>city</th>
    <th>tournament image</th>
    <th>start date</th>
    </tr>
</thead>
<tbody>
    {tournaments && tournaments.map(tournament => (
        <tr key = {tournament.id}>
            
            
            {/* <Link to = {`/details/${tournament.id}`}> */}
            <td> 
              <Link to = {`/details/${tournament.id}`} >{tournament.name}</Link>
            </td>
            <td>{tournament.city}</td>
            <td>
            <img className="image" src= {tournament.images[0] && tournament.images[0].url} />
            </td>
            
            <td>{tournament && moment.unix(tournament.startAt).format("MMM DD YYYY hh:mm a")} </td>

        </tr>
    ))}
</tbody>  
</table>
        

    </>
  );
}

export default LandingPage;
