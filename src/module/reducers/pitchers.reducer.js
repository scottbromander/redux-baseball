let pitcherList = ['Maud Nelson', 'Ila Borders', 'Don Newcombe', 'CC Sabathia'];
let currentPitcher = 'Maud Nelson';

const pitchersReducer = (state = pitcherList, action) => {
    switch(action.type) {
        case 'PITCHER_SUBMIT':
            return [...state, action.payload];
        default:
            return state;
    }
};

const pitcherSelectedReducer = (state = currentPitcher, action) => {
    switch(action.type) {
        case 'PITCHER_SELECT':
            return action.payload;
        default:
            return state;
    }
};

export {
    pitchersReducer,
    pitcherSelectedReducer
};