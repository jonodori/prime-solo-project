import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';
import { useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Details from '../Details/Details';
import moment from 'react-moment';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import GoogleMapReact from 'google-map-react';





// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';



function LandingPage() {
  const tournaments = useSelector(store => store.tournamentList);

  const history = useHistory();
  
  //shows date and time for moment
  const moment = require('moment-timezone');

  
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
    
    <div className="title">Local E-sports</div>
    <form className="search" onSubmit={fetchTournaments}>

      <br></br>
      <TextField id="state-basic" label="State" variant="outlined" 
      value={state} 
      onChange={(event) => setState(event.target.value.toUpperCase())}
      />
      <Button variant="contained" color="secondary" type="Submit">
        Find
      </Button>
      
      <h3 className="local-tournaments">Local Tournaments</h3>
      </form>

      
      
      
    

    {tournaments && tournaments.map(tournament => (
        <div key = {tournament.id}>
  
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="30vh"
>
      
      <Link to = {`/details/${tournament.id}`}><Card sx={{ width: 900 }}>
      <CardMedia
        component="img"
        height="140"
        image={tournament.images[0] && tournament.images[0].url}
        
      />
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {tournament.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {tournament && moment.unix(tournament.startAt).format("MMM DD YYYY hh:mm a")}
        <br></br>
        City: {tournament.city}
        <br></br>
        Attendees: {tournament && tournament.numAttendees}
        </Typography>
      </CardContent>
      <CardActions>
        
        {/* <Button  size="small">Click here to join and Learn More</Button> */}
      </CardActions>
    </Card>
    </Link>
   
    </Box>
   
            {/* <Link to = {`/details/${tournament.id}`}> */}
            
        </div>
        
    ))}

        

    </>
  );
}

export default LandingPage;
