export function renderPlayListHeader(anyPlayList){

    const playListTitleEl = document.createElement('h1');
    playListTitleEl.innerText = anyPlayList.playListInfo.playListTitle;
    document.body.append(playListTitleEl);

    const playListImgEl = document.createElement('img');
    playListImgEl.src = anyPlayList.playListInfo.coverImageUrl;
    document.body.append(playListImgEl);

    const playListTotalCoverCountEl = document.createElement('span');
    playListTotalCoverCountEl.innerText = 'Traks count: ' + anyPlayList.tracks.length;
    document.body.append(playListTotalCoverCountEl);

}

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

export function renderPlayList(anyPlayList){

    
    renderPlayListHeader(anyPlayList);
    for(let track of anyPlayList.tracks){
    
        renderTrack(track);
    };
}

 