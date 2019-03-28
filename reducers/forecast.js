import * as types from '../constants/actionTypes';

let initialState = {
    history: [],
    currentCity: {},
    currentCityGeocode: null,
};

export const forecast = (state = initialState, action) => {
  switch (action.type) {
      case types.ADD_CITY:
          return {
              currentCity: action.city.weather,
              history: [...state.history, action.city.weather],
              currentCityGeocode: action.city.geocode,
          };
      default :
          return state;
  }
};
