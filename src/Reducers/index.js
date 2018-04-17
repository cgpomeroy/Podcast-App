import { combineReducers } from 'redux';
import itunesAPISearchResults from './itunesAPISearchResults';
import podcastInfo from './podcastInfo'
import podcastEpisodes from './podcastEpisodes';

const rootReducer = combineReducers({
    apiSearchResults: itunesAPISearchResults,
    podcastEpisodes: podcastEpisodes,
    podcastInfo: podcastInfo
});

export default rootReducer;