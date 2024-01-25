// const playList = {
//     playListID: '1',
//     playListInfo: {
//         title: '',
//         coverImageUrl: '',
//         totalInfo:{
//             totalTracksCount: 4,
//             totalTracksDuration : 777
//         }

//     },
//     tracks: [
//         {
//             trackID: '1',
//             trackCoverImageUrl: 'assets/tracksCover/Eminem.jpg',
//             artistName: 'Eminem',
//             trackTitle: 'Rap god',
//             trackFileUrl: 'assets/tracks/eminem–rap-god.mp3',
//             trackDurationPerSecond : 1,
//             isHot : true
//         },
//         {
//             trackID: '2',
//             trackCoverImageUrl: 'assets/tracksCover/50_Cent.jpg',
//             artistName: '50 Cent',
//             trackTitle: 'In Da Club',
//             trackFileUrl: 'assets/tracks/50-cent-in-da-club.mp3',          
//             trackDurationPerSecond : 1,
//             isHot : false
//         }
//     ]
// }





// function renderTrack(track){
//     let div = document.createElement('div');
    

//     let cover = document.createElement('img');
//     cover.src = track.trackCoverImageUrl;
//     cover.width = 150;
//     cover.height = 150;
//     div.append(cover);


//     let span = document.createElement('span');
//     span.innerText = track.artistName + ' - ' +track.trackTitle;
//     div.append(span);

//     let audio = document.createElement('audio');
//     audio.src = track.trackFileUrl;
//     audio.controls = true;
//     div.append(audio);   

//     document.body.append(div);
// }

import { playList } from "./render/data.module.js";
import { renderTrack } from "./render/renderTrack.module.js";

for(let track of playList.tracks){

    renderTrack(track);
};