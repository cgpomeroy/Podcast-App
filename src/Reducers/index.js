import { combineReducers } from 'redux';
import itunesAPISearchResults from './itunesAPISearchResults';

const rootReducer = combineReducers({
    apiSearchResults: itunesAPISearchResults
});

export default rootReducer;