import React from "react";

function JoinTournament (){
    return(
        <>
        <form onSubmit>
        <h3>Player information</h3>

        <input type="text" id="sponsor" placeholder="Sponsor" />
        <input type="text" id="gamertag" placeholder="Gamertag" />

        <h3>Select Games</h3>
        <input type="checkbox" id="street_fighter" name="" value="street fighter" />
        <label for="Street Fighter">Street Fighter</label>
        <br></br>
        <button type="Submit">Enter Tournament</button>
        </form>
        </>
    )
}

export default JoinTournament;