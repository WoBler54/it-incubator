export const playList = {
    playListID: '1',
    playListInfo: {
        title: '',
        coverImageUrl: '',
        totalInfo:{
            totalTracksCount: 4,
            totalTracksDuration : 777
        }

    },
    tracks: [
        {
            trackID: '1',           
            trackCoverImageUrl: './assets/traksCover/Eminem.jpg',
            artistName: 'Eminem',
            trackTitle: 'Rap god',
            trackFileUrl: './assets/tracks/eminem–rap-god.mp3',
            trackDurationPerSecond : 1,
            isHot : true
        },
        {
            trackID: '2',
            
            trackCoverImageUrl: '/mediaPlayer/assets/traksCover/50_Cent.jpg',


            artistName: '50 Cent',
            trackTitle: 'In Da Club',
            trackFileUrl: './assets/tracks/50-cent-in-da-club.mp3',          
            trackDurationPerSecond : 1,
            isHot : false
        }
    ]
}

