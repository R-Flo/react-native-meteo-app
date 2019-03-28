import * as types from '../constants/actionTypes';
import {toggleLoader} from "./loader";

export const fetchCity = city => {
    return async dispatch => {
        dispatch(toggleLoader(true));
        let data = [];

        // geocode
        const responseGeocode = await fetch('https://eu1.locationiq.com/v1/search.php?key=ad38a05e8fb952&q=' + city + '&format=json');
        const geocode = await responseGeocode.json();
        data.geocode = geocode[0];

        const result = await fetch('http://api.apixu.com/v1/current.json?key=2c2cfe0a6fdd4bf59d290437192603&lang=fr&q=' + city);
        data.weather = await result.json();
        dispatch(addCity(data));
        dispatch(toggleLoader(false))
    }
};

export const addCity = city => {
    return {type: types.ADD_CITY, city}
};
