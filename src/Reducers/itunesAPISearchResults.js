import { GET_ITUNES_API } from '../Actions';

export default function(state=[], action){
    switch(action.type){
        case GET_ITUNES_API:
            return [ ...action.payload.data.results];
        default:
            return state;
    }
}