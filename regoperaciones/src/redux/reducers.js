import { combineReducers } from 'redux';
import opReducer from './opReducer';

const reducers = combineReducers({
    opReducer: opReducer,
});

export default reducers;