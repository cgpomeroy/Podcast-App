import { GET_ITUNES_API } from '../Actions';

export default function(state=[], action){
    switch(action.type){
        case GET_ITUNES_API:
            console.log(action.payload.data.results);
            return [action.payload.data.results];
        default:
            return state;
    }
}