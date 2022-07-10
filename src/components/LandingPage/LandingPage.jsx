import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';
import { useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Details from '../Details/Details';



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

  const details = (id) => {
    
    history.push('/details/:id')
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
      
    
<table>
<thead>
    <tr>
    <th>tournament id</th>
    <th>tournament name</th>
    <th>tournament state</th>
    <th>tournament image</th>
   
    </tr>
</thead>
<tbody>
    {tournaments.map(tournament => (
        <tr key = {tournament.id}>
            <td>{tournament.id}</td>
            {/* <Link to = {`/details/${tournament.id}`}> */}
            <td> 
              
              <Link to = {`/details/${tournament.id}`} >{tournament.name}</Link>
              
            
            </td>
            <td>{tournament.addrState}</td>
            <td>
            
            <img className="image" src= {tournament.images[0] && tournament.images[0].url} />
          
            </td>

        </tr>
    ))}
</tbody>  
</table>
        

    </>
  );
}

export default LandingPage;
