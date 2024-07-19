import { combineReducers } from 'redux';
import operationsReducer from './operationsReducer';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
    operationsReducer,
    usersReducer,
});

export default rootReducer;