import { ADD_OP } from './actionsOperations';

const initialState = {
    operations: [],
};

const operationsReducer = ( state = initialState, action ) => {
    switch(action.type){
        case ADD_OP:
            return {
                ...state,
                operations: [...state.operations, action.payload],
            };
        default: return state;
    };
};

export default operationsReducer;