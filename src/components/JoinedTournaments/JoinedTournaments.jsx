import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect }  from 'react';
import { useParams } from 'react-router-dom'
// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is



function JoinedTournaments() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'FETCH_USER_DETAILS',
    })
  }, [])

  const user = useSelector(store=> store.userDetails);
  console.log('in Joined Tournaments', user);

  const handleDelete = (id, tournament_id) => {
    console.log('this is handledelete', id, tournament_id);
    dispatch({
      type: 'DELETE_JOIN_TOURNAMENT',
      payload: {
            id,
            tournament_id 
      }
  })
}


  
  return (
    <>
    
    <div className="container">
      <h2>Tournaments Joined</h2>
      
    </div>
    <table>
    <thead>
        <tr>
        
        <th>Tournament Name</th>
        <th>Address</th>
        <th>Organizer Contact</th>
        
        <th>Gamertag</th>
        <th>Image</th>
        </tr>
    </thead>
    <tbody>
      {user && user.map(users => (
        <tr key = {user.id}>
          <td>{users.tournament_name}</td>
          <td>{users.address}</td>
          <td>{users.organizer_contact}</td>
          <td>{users.gamertag}</td>
          <td><img src={user.image_url} /></td>
          <td><button className="btn btn_sizeSm" onClick={() => 
            {
              swal({
                title: "Are you want to cancel Joined Tournament?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
                
              })
              .then((willDelete) => {
                if (willDelete) {
                  swal("You have cancelled from the tournament", {
                    icon: "success",
                    function: handleDelete(users.registration_id, users.tournament_id)
                  });
                } else {
                  swal("You are still in the tournament!");
                }
              });
            
          }
            }>
        Cancel
        </button>
        </td>
        </tr>
        ))}
    </tbody>  
    </table>
    </>  
  );
}



export default JoinedTournaments;
