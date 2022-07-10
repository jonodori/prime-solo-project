const details = (state = null, action) => {
    switch (action.type) {
      case 'SET_DETAILS':
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default details;