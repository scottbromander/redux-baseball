import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { pitchersReducer, pitcherSelectedReducer } from '../reducers/pitchers.reducer';
import { catchersReducer, catcherSelectedReducer } from '../reducers/catchers.reducer';

const storeInstance = createStore(
    combineReducers({
        pitchersReducer,
        pitcherSelectedReducer,
        catchersReducer,
        catcherSelectedReducer
    }),
    applyMiddleware(logger)
);

export default storeInstance;