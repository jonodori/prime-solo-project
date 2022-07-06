import React from "react";

function CreateTournament(){
    return (
        <>


        <h2>Create Tournament</h2>

        <form onSubmit>
        <h4>Tournament Name</h4>
        <input type="text" id="tournament-name" placeholder="" />
        
        <h4>Primary Contact</h4>
        <input type="text" id="primary-contact" placeholder="" />
        
        <h4>Game</h4>
        <input type="text" id="game" placeholder="" />
        
        <h4>Dates</h4>
        <h6>Start Date and Time</h6>
        <input type="datetime-local" id="dates" placeholder="Start Date and time" />

        <h6>End Date and Time</h6>
        <input type="datetime-local" id="dates" placeholder="Start Date and time" />

        <button type="Submit">Submit</button>

        </form>
        
        
        
        </>
    )
}

export default CreateTournament;