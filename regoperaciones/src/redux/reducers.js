import { combineReducers } from 'redux';
import opReducer from './opReducer';
import userReducer from './userReducer';

const reducers = combineReducers({
    opReducer: opReducer,
    userReducer: userReducer,
});

export default reducers;