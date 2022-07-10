import axios from 'axios';
import { put, takeLatest} from 'redux-saga/effects';


function* fetchTournament(action) {
   console.log('=>', action); 
   
   try {
       const res = yield axios.get(`/api/tournament/${action.payload}`);
       yield put({ type: 'SET_TOURNAMENT', payload: res.data})
    }   
    catch (err) {
       console.error('error is', err)
    }
   }


function* getTournamentSaga(){
    console.log('made it to tournament sagas')
    yield takeLatest('FETCH_TOURNAMENTS', fetchTournament)
    console.log('hit Sagas')
}

export default getTournamentSaga;