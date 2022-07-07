import axios from 'axios';
import { put, takeLatest} from 'redux-saga/effects';

// function* fetchTournament() {
//     try {
//        const res = yield axios.get('/api/tournament');
//        yield put({ type: 'SET_TOURNAMENT', payload: res.data})
//     }   
//     catch (err) {
//        console.error('error is', err)
//     }
//    }

function* addTournament(action) {
    try {
       yield axios.post('/api/tournament', action.payload);
    //    yield put({ type: 'FETCH_SHELF'})
    }   
    catch (err) {
       console.error('error is', err)
    }
   }

function* tournamentSaga(){
    yield takeLatest('SET_TOURNAMENT_INFO', addTournament)
}

export default tournamentSaga;

