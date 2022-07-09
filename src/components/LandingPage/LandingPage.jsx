import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';
import { useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
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
    <div className="container">
      <h2>{heading}</h2>

      <div className="grid">
        <div className="grid-col grid-col_8">
          <p>
          
          </p>

        </div>
       
      </div>
    </div>

    </>
  );
}

export default LandingPage;
