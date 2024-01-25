import { renderPlayListHeader } from "./renderPlayListHeader.module.js";
import { renderTrack } from "./renderTrack.module.js";

export function renderPlayList(anyPlayList){

    
    renderPlayListHeader(anyPlayList);
    for(let track of anyPlayList.tracks){
    
        renderTrack(track);
    };
}

 