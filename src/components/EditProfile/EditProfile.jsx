import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import {useParams} from 'react-router-dom';



function EditProfile(){

    const user = useSelector(store=> store.user);
    console.log('in editprofile', user )
    

    const params = useParams(); // {id : 2}
    const dispatch = useDispatch();

    const [gamertag, setGamertag] = useState('');    
    
    
    const handleSubmit = (evt) => {
        evt.preventDefault();

        dispatch({
            type: 'SAVE_GAMERTAG',
            payload: {
                gamertag: gamertag,
                id: user.id
            }
        })
    }
    
    return(
    <>
   

    <div>
        gamertag: {user.gamertag}
    </div>
    
    <h4></h4>
    <div>
        <form onSubmit={handleSubmit}>
        <input type="text" id="gamertag"
            name="gamertag" 
            value={gamertag}    
            onChange={(event) => setGamertag(event.target.value)
    
            }
            
        />

        <input className="btn btn_sizeSm" type="submit" value="submit" />

        {/* <button className="btn btn_sizeSm" onClick={() => {handleSubmit(users.registration_id, users.tournament_id)}}>
        Change Gamertag
        </button> */}
        </form>
    </div>
    </>
    )
}

export default EditProfile;