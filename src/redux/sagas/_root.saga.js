import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import tournamentSaga from './tournament.saga';
import getTournamentSaga from './gettournament.saga';
import getDetails from './details.saga';
import joinTournament from './jointournament.saga';
import userdetails from './userdetails.saga';
import deleteJoin from './deletejoin.saga'

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    tournamentSaga(),
    getTournamentSaga(),
    getDetails(),
    joinTournament(),
    userdetails(),
    deleteJoin(),
  ]);
}
