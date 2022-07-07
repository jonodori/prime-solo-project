import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  const games = [
    { label: 'Apex'},
    { label: 'Street Fighter' },
    { label: 'Guilty Gear Strive' },
    { label: 'Valorant'},
    { label: 'League of Legends' },
    { label: "Super Smash Bros Ultimate" },
    { label: 'Fortnite' }
  ]

  return (
    <>
    <form onSubmit>
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={games}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Games" />}
    />
    <span><input type="text" id="cityzip" placeholder="City or Zipcode" /></span>
    <input type="date" id="date"></input>
    <button type="Submit">Submit</button>
    </form>

    <button>Create tournament</button>
    <h2>Local Tournaments</h2>
    <div className="container">
      <h2>{heading}</h2>

      <div className="grid">
        <div className="grid-col grid-col_8">
          <p>
          
          </p>

          <p>
            Praesent consectetur orci dui, id elementum eros facilisis id. Sed
            id dolor in augue porttitor faucibus eget sit amet ante. Nunc
            consectetur placerat pharetra. Aenean gravida ex ut erat commodo, ut
            finibus metus facilisis. Nullam eget lectus non urna rhoncus
            accumsan quis id massa. Curabitur sit amet dolor nisl. Proin
            euismod, augue at condimentum rhoncus, massa lorem semper lacus, sed
            lobortis augue mi vel felis. Duis ultrices sapien at est convallis
            congue.
          </p>

          <p>
            Fusce porta diam ac tortor elementum, ut imperdiet metus volutpat.
            Suspendisse posuere dapibus maximus. Aliquam vitae felis libero. In
            vehicula sapien at semper ultrices. Vivamus sed feugiat libero. Sed
            sagittis neque id diam euismod, ut egestas felis ultricies. Nullam
            non fermentum mauris. Sed in enim ac turpis faucibus pretium in sit
            amet nisi.
          </p>
        </div>
       
      </div>
    </div>

    </>
  );
}

export default LandingPage;
