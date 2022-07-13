const userDetails = (state = [], action) => {
    switch (action.type) {
      case 'SET_USER_DETAILS':
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default userDetails;