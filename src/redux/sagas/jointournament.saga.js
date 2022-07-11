import axios from 'axios';
import { put, takeLatest} from 'redux-saga/effects';


function* addTournament(action) {
    try {
       yield axios.post('/api/jointournament', action.payload);
    //    yield put({ type: 'FETCH_SHELF'})
    }   
    catch (err) {
       console.error('error is', err)
    }
   }

function* joinTournament(){
    console.log('made it to join sagas')
    yield takeLatest('SET_JOIN_TOURNAMENT', addTournament)
    console.log('hit Sagas')
}

export default joinTournament;