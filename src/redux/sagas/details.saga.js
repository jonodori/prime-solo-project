import axios from 'axios';
import { put, takeLatest} from 'redux-saga/effects';


function* fetchDetails(action) {
   console.log(action); 
   
   try {
       const res = yield axios.get(`/api/details/${action.payload}`);

       console.log('in fetchDetails', action.payload);
       yield put({ type: 'SET_DETAILS', payload: res.data})
       console.log(res.data);
    }   
    catch (err) {
       console.error('error is', err)
    }
   }


function* getDetails(){
    
    yield takeLatest('FETCH_DETAILS', fetchDetails)
    
}

export default getDetails;