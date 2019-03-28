import * as types from '../constants/actionTypes';

let initialState = {
    quotesList: []
};

export const quotes = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_QUOTE:
            return {
                ... state,
                quotesList: [
                    ...state.quotesList,
                    action.quote
                ]
            };
        default:
            return state;
    }
};
