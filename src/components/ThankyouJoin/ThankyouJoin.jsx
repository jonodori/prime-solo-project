
function ThankYouJoin (){
    return (
        <>
        <h4>Thank you for registering for </h4>
        <h4>We look forward to you competing and having fun!</h4>
        

        <h5>Tournament registered: 
        {tournament && tournament.name}
        </h5>
        </>
    )

}

export default ThankYouJoin;