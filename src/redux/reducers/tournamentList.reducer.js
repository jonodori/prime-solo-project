const tournamentListReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_TOURNAMENT':
            return action.payload;
        default:
            return state;
    }
};

export default tournamentListReducer;