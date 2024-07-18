import { combineReducers } from 'redux';
import opReducer from './opReducer';
import userReducer from './userReducer';

const rootReducers = combineReducers({
    opReducer: opReducer,
    userReducer: userReducer,
});

export default rootReducers;