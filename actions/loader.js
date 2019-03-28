import * as types from '../constants/actionTypes';

export const toggleLoader = (isShown) => {
    return {type: types.TOGGLE_LOADER, isShown}
};
