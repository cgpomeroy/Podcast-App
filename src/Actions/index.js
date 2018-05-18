import axios from 'axios';
const Parser = require('rss-parser');
let parser = new Parser();


export const GET_ITUNES_API = "GET_ITUNES_API";
export const GET_PODCAST_INFO = "GET_PODCAST_INFO";
export const GET_PODCAST_EPISODES = "GET_PODCAST_EPISODES";
export const SET_NOW_PLAYING = "SET_NOW_PLAYING";

export function getItunesAPI(term){
    const ROOT_URL = "https://itunes.apple.com/search?entity=podcast&term=";

    const apiCall = ROOT_URL+term;

    const request = axios.get(apiCall);

    return {
        type: GET_ITUNES_API,
        payload: request
    };
}

export function getPodcastInfo(id){
    const ROOT_URL = "https://itunes.apple.com/lookup?id=";

    const apiCall = ROOT_URL+id;

    const request = axios.get(apiCall);

    return {
        type: GET_PODCAST_INFO,
        payload: request
    }
}

export function getPodcastEpisodes(episodes){
    const request = `https://cors-anywhere.herokuapp.com/${episodes}`;

    let feed = parser.parseURL(request);


    return {
        type: GET_PODCAST_EPISODES,
        payload: feed
    }
}

export function setNowPlaying(episode){
    return {
        type: SET_NOW_PLAYING,
        payload: episode
    }
}