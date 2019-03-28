import * as types from '../constants/actionTypes';

let initialState = {
    isLoaderDisplayed: false
};

export const loader = (state = initialState, action) => {
    switch (action.type) {
        case types.TOGGLE_LOADER:
            return {
                ...state,
                isLoaderDisplayed: action.isShown
            };
        default:
            return state;
    }
};
