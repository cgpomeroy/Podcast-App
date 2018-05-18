import { SET_NOW_PLAYING } from "../Actions";

export default function(state="", action){
    switch (action.type){
        case SET_NOW_PLAYING:
            return action.payload;
        default:
            return state;
    }
}