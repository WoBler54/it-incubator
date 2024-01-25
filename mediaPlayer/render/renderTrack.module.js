
export function renderTrack(track){
    let div = document.createElement('div');
    

    let cover = document.createElement('img');
    cover.src = track.trackCoverImageUrl;
    cover.width = 80;
    cover.height = 80;
    div.append(cover);    

    let audio = document.createElement('audio');
    audio.src = track.trackFileUrl;
    audio.controls = true;
    div.append(audio);   

    let span = document.createElement('span');
    span.innerText = track.artistName + ' - ' +track.trackTitle;
    div.append(span);

    document.body.append(div);
}