import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';
import { useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';



function LandingPage() {
  
  const tournaments = useSelector(store => store.tournamentList);

  const history = useHistory();

  
  const [state, setState] = useState('');

  const dispatch = useDispatch();

  const onLogin = (event) => {
    history.push('/login');
  };


  const fetchTournaments = () => {
    dispatch({
      type: 'FETCH_TOURNAMENTS',
      payload: 
        state
      
    })
  }

  
  

  return (
    <>
    <form onSubmit={fetchTournaments}>

      <br></br>
   
      <input type="text" id="state"
      value={state} 
      placeholder="State" 
      onChange={(event) => setState(event.target.value)}
      />
        
      <button type="Submit">Submit</button>
      </form>

      
      <h2>Local Tournaments</h2>
        {tournaments.map(tournament => {
          return (
            <li key ={tournament.id}>
              {tournament.id}
              {tournament.name}
              {tournament.addrState}
              <img src= {tournament.images[0] && tournament.images[0].url} />
            </li>
          )
        })}

    </>
  );
}

export default LandingPage;
