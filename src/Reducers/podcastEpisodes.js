import { GET_PODCAST_EPISODES} from '../Actions';

export default function(state=[], action){
    switch(action.type){
        case GET_PODCAST_EPISODES:
            return action.payload.items;

        default:
            return state;
    }
}