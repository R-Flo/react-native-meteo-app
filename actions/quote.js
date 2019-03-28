import * as types from '../constants/actionTypes';
import {toggleLoader} from './loader';

export const fetchQuote = () => {
  return async dispatch => {

      dispatch(toggleLoader(true));

      const response = await fetch('https://api.tronalddump.io/random/quote');
      const quote = await response.json();

      dispatch(addQuote(quote));

      dispatch(toggleLoader(false));
  }
};

export const addQuote = (quote) => ({type: types.ADD_QUOTE, quote});
