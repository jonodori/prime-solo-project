import axios from 'axios';
import { put, takeLatest} from 'redux-saga/effects';


function* fetchUserDetails(action) {
   console.log('!!!!!!', action); 
   
   try {
       const response = yield axios.get(`/api/tournament/`);

       console.log('in fetchUserDetails', response.data);
       yield put({ type: 'SET_USER_DETAILS', payload: response.data})
       console.log(response.data);
    }   
    catch (err) {
       console.error('error in fetchUserDetails', err)
    }
   }


function* userdetails(){
    
    yield takeLatest('FETCH_USER_DETAILS', fetchUserDetails)
    
}

export default userdetails;