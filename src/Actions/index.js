import axios from 'axios';

export const GET_ITUNES_API = "GET_ITUNES_API";

const ROOT_URL = "https://itunes.apple.com/search?entity=podcast&term=";

export function getItunesAPI(term){
    const apiCall = ROOT_URL+term;

    const request = axios.get(apiCall);

    return {
        type: GET_ITUNES_API,
        payload: request
    };
}