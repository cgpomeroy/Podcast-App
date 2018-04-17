import { GET_PODCAST_INFO} from '../Actions';

export default function(state=[], action){
    switch(action.type){
        case GET_PODCAST_INFO:
            return action.payload;
        default:
            return state;
    }
}