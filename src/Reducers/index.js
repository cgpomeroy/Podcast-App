import { combineReducers } from 'redux';
import itunesAPISearchResults from './itunesAPISearchResults';
import podcastInfo from './podcastInfo'
import podcastEpisodes from './podcastEpisodes';
import nowPlaying from "./nowPlaying";

const rootReducer = combineReducers({
    apiSearchResults: itunesAPISearchResults,
    podcastEpisodes: podcastEpisodes,
    podcastInfo: podcastInfo,
    nowPlaying: nowPlaying
});

export default rootReducer;