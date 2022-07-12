const gamerTag = (state = {}, action) => {
    switch (action.type) {
      case 'SET_GAMERTAG':
        return action.payload;
      case 'UPDATE_GAMERTAG':
        return {
            ...state,
            ...action.payload,
        }
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default gamerTag;