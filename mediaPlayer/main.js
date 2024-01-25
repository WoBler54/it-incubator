import { playLists } from "./data.module.js";
import { renderPlayList } from "./render/renderPlayList.module.js";

for(let playList of playLists){
    renderPlayList(playList);
}
