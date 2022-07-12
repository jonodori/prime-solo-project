import axios from 'axios';
import { put, takeLatest} from 'redux-saga/effects';

function* setDelete (action){
    try{
    yield axios.delete(`/api/tournament/${action.payload.id}`, action.payload.tournament_id)
    console.log('in Delete', action.payload);
    // doesn't need a reducer
    }
    catch{

    }
}

function* deleteJoin(){
    yield takeLatest('DELETE_JOIN_TOURNAMENT', setDelete )
}

export default deleteJoin;