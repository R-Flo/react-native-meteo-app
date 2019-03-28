import {combineReducers} from "redux";
import {loader} from './loader';
import {forecast} from './forecast';
import {quotes} from './quotes';

export default combineReducers({loader, forecast, quotes});
