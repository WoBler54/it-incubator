export function renderTrack(track){
    let div = document.createElement('div');
    

    let cover = document.createElement('img');
    cover.src = track.trackCoverImageUrl;
    cover.width = 150;
    cover.height = 150;
    div.append(cover);


    let span = document.createElement('span');
    span.innerText = track.artistName + ' - ' +track.trackTitle;
    div.append(span);

    let audio = document.createElement('audio');
    audio.src = track.trackFileUrl;
    audio.controls = true;
    div.append(audio);   

    document.body.append(div);
}