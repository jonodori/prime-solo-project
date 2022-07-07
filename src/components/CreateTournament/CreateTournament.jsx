import React, {useState} from "react";
import { useDispatch } from "react-redux";

function CreateTournament(){
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [primaryContact, setPrimaryContact] = useState('');
    const [city, setCity] = useState('');
    const [rules, setRules] = useState('');
    const [prizes, setPrizes] = useState('');
    const [details, setDetails] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleSubmit = (evt) => {
        console.log('test');
       
        const tournamentInfo = {
            name: name,
            primaryContact: primaryContact,
            city: city,
            rules: rules,
            prizes: prizes,
            game: game,
            details: details,
            startDate: startDate,
            endDate: endDate
        }
        console.log('In handle submit', tournamentInfo);

        evt.preventDefault()
        dispatch({
            type: 'SET_TOURNAMENT_INFO',
            payload: tournamentInfo
        })
    }

    return (
        <>
        <h2>Create Tournament</h2>

        <form onSubmit={handleSubmit}>
        <h4>Tournament Name</h4>
        <input type="text" id="tournament-name" 
        value={name} 
        onChange={(event) => setName(event.target.value)}
        placeholder="" 
        />
        
        <h4>Primary Contact</h4>
        <input type="text" id="primary-contact" 
        value={primaryContact} 
        onChange={(event) => setPrimaryContact(event.target.value)}
        placeholder="" 
        />

        <h4>City</h4>
        <input type="text" id="location" 
        value={city} 
        onChange={(event) => setCity(event.target.value)}
        placeholder=""
        />

        <h4>Rules</h4>
        <input type="text" id="address" 
        value={rules} 
        onChange={(event) => setRules(event.target.value)}
        placeholder=""
        />

        <h4>Prizes</h4>
        <input type="text" id="address" 
        value={prizes} 
        onChange={(event) => setPrizes(event.target.value)}
        placeholder=""
        />

        <h4>Details</h4>
        <input type="text" id="address" 
        value={details} 
        onChange={(event) => setDetails(event.target.value)}
        placeholder=""
        />
     
        <h4>Game</h4>
        <input type="text" id="game" placeholder="" />
        
        <h4>Dates</h4>
        <h6>Start Date and Time</h6>
        <input type="date" id="start-date" 
        value={startDate} 
        onChange={(event) => setStartDate(event.target.value)}
        placeholder="Start Date and time" />

        <h6>End Date and Time</h6>
        <input type="date" id="end-date" 
        value={endDate} 
        onChange={(event) => setEndDate(event.target.value)}
        placeholder="End Date and time" />

        <button type="Submit">Submit</button>

        </form>
         
        </>
    )
}

export default CreateTournament;