let track = {
    coverTrack : '',
    artist: '',
    title: '',
    audio: '',
    isHot: false
}
let playList = [];

let createTrack = function(coverTrack,artist,title,audio){
    let newTrack = Object.create(track);
    newTrack.coverTrack = coverTrack;
    newTrack.artist = artist;
    newTrack.title = title;
    newTrack.audio = audio;

    playList.push(newTrack);
    return newTrack;
}

let rapGodEminem = createTrack('assets/traksCover/Eminem.jpg','Eminem','Rap god','assets/tracks/eminem–rap-god.mp3');
let inDaClub50Cent = createTrack('assets/traksCover/50_Cent.jpg','50 Cent','In Da Club','assets/tracks/50-cent-in-da-club.mp3');

function renderTrack(track){
    let div = document.createElement('div');
    

    let cover = document.createElement('img');
    cover.src = track.coverTrack;
    cover.width = 150;
    cover.height = 150;
    div.append(cover);


    let span = document.createElement('span');
    span.innerText = track.artist + ' - ' + track.title;
    div.append(span);

    let audio = document.createElement('audio');
    audio.src = track.audio;
    audio.controls = true;
    div.append(audio);   

    document.body.append(div);
}

for(track of playList){
    renderTrack(track);
};