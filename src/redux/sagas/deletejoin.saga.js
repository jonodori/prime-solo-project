import axios from 'axios';
import { put, takeLatest} from 'redux-saga/effects';

function* setDelete (action){
    console.log('made it in setDelete', action.payload)
    try{
    yield axios.delete(`/api/tournament/${action.payload.id}`)
    // doesn't need a reducer
    yield put ({
        type:'FETCH_USER_DETAILS',
    })
    }catch (error) {
        console.log('Error in deletejoin saga:', error);
    }
}

function* deleteJoin(){
    yield takeLatest('DELETE_JOIN_TOURNAMENT', setDelete )
}

export default deleteJoin;