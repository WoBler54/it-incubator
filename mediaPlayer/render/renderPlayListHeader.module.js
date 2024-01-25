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