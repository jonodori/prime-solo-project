import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import {useParams} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './EditProfile.css'


function EditProfile(){

    const user = useSelector(store=> store.user);
    console.log('in editprofile', user )
    

    const params = useParams(); // {id : 2}
    const dispatch = useDispatch();

    const [gamertag, setGamertag] = useState('');    
    
    //Doesn't need a useEffect
    // useEffect(() => {
    //     dispatch({
    //         type: 'FETCH_GAMERTAG',
    //         payload: params.id
    //     })

    // }, [params.id])

    
    const handleSubmit = (evt) => {
        evt.preventDefault();

        dispatch({
            type: 'SAVE_GAMERTAG',
            payload: {
                gamertag: gamertag,
                id: user.id
            }
        })
        // clears input
        setGamertag('')
    }
    
    return(
    <>
   
    <div class="edit-container">
    <div>
        gamertag: {user.gamertag}
    </div>
    
    <br></br>
    <div>
        <form onSubmit={handleSubmit}>
        {/* <input type="text" id="gamertag"
            name="gamertag" 
            value={gamertag}    
            onChange={(event) => setGamertag(event.target.value)
    
            } */}
        <TextField id="gamertag" label="gamertag" variant="outlined" 
            name="gamertag"
            value={gamertag} 
            onChange={(event) => setGamertag(event.target.value)}
        />
            
        
        <Button variant="contained" color="secondary" type="Submit">
            Submit
        </Button>
        {/* <input className="btn btn_sizeSm" type="submit" value="submit" /> */}

        {/* <button className="btn btn_sizeSm" onClick={() => {handleSubmit(users.registration_id, users.tournament_id)}}>
        Change Gamertag
        </button> */}
        </form>
        </div>
    </div>
    
    </>
    )
}

export default EditProfile;