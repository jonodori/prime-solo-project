const express = require('express');
const bodyParser = require('body-parser');
// require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const tournamentRouter = require('./routes/tournament.router');
const detailsRouter = require('./routes/details.router');
const jointournamentRouter = require('./routes/jointournament.router')
const googleRouter = require('./routes/google.router')

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/tournament', tournamentRouter);
app.use('/api/details', detailsRouter);
app.use('/api/jointournament', jointournamentRouter);
app.use('/api/google', googleRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
