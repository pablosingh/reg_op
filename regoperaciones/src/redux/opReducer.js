import { ADD_OP, SHOWSTATE } from './actions';

const initialState = {
    operations: [],
};

const opReducer = ( state = initialState, action ) => {
    switch(action.type){
        case SHOWSTATE: 
            console.log(state);
            console.log("reducer");
            return {
                ...state,
            };
        case ADD_OP:
            return {
                ...state,
                operations: [...action.payload],
            };
        default: return {...state};
    };
};

export default opReducer;