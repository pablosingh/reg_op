export const SHOWSTATE = 'SHOWSTATE;'
export const ADD_OP = 'ADD_OP';

export const addOperation = (op) => {
    return {
        type: ADD_OP,
        payload: op,
    };
};

export const showState = () => {
    return {
        type: SHOWSTATE,
        payload: null,
    }
}