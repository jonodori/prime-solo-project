import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect }  from 'react';
import { useParams } from 'react-router-dom'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './JoinedTournaments.css'



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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

  
  return (
    <>
    
    <div className="join-container">
      <h2>Tournaments Joined</h2>

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Tournament Name</StyledTableCell>
            <StyledTableCell align="right">Address</StyledTableCell>
            <StyledTableCell align="right">Organizer Contact</StyledTableCell>
            <StyledTableCell align="right">Gamertag</StyledTableCell>
            <StyledTableCell align="right">Tournament Cancel</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {user && user.map(users => (
            <StyledTableRow key={user.id}>
              <StyledTableCell component="th" scope="row" >
              {users.tournament_name}
              </StyledTableCell>
              <StyledTableCell align="right">{users.address}</StyledTableCell>
              <StyledTableCell align="right">{users.organizer_contact}</StyledTableCell>
              <StyledTableCell align="right">{users.gamertag}</StyledTableCell>
              <StyledTableCell align="right">
              <Button variant="contained" color="error" onClick={() => 
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
        </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  
    </div>
    
   
    </>  
  );
}



export default JoinedTournaments;
