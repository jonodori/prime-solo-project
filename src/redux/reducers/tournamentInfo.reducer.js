const tournamentInfo = (state = [], action) => {
    switch (action.type) {
      case 'SET_TOURNAMENT_INFO':
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default tournamentInfo;