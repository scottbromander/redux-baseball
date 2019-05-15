let catcherList = ['Roy Campanella', 'Elston Howard', 'Kenji Jojima'];
let currentCatcher = 'Elston Howard';

const catchersReducer = (state = catcherList, action) => {
    switch(action.type) {
        case 'CATCHER_SUBMIT':
            return [...state, action.payload];
        default:
            return state;
    }
};

const catcherSelectedReducer = (state = currentCatcher, action) => {
    switch(action.type) {
        case 'CATCHER_SELECT':
            return action.payload;
        default:
            return state;
    }
};

export {
    catchersReducer,
    catcherSelectedReducer
};