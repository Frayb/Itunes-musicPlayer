
const musicContainer = document.querySelector('.container');
const musicName = document.querySelector('.song-details .song_name');
const artistName = document.querySelector('.song-details .artist_name');
const imgCover = document.querySelector('.img-area img');
Audio = document.querySelector("#main-audio");

const repeatButton = document.querySelector('#repeat');
const prevButton = document.querySelector('#prev');
const playPauseButton = document.querySelector('.play-pause');
const nextButton = document.querySelector('#next');
const shuffleButton = document.querySelector('#shuffle');

const playPauseIcon = document.querySelector(".play-pause i");
 

let index = 7;

window.addEventListener("load", ()=>{
    loadMusic(index);

})

function loadMusic(indexValue){
    musicName.innerHTML = songs[indexValue-1].nameofSong;
    artistName.innerHTML = songs[indexValue-1].artist;
    imgCover.src = songs[indexValue-1].img ;
    Audio.src = songs[indexValue-1].audio;
}


//=========play and pause music==========//

playPauseButton.addEventListener("click", ()=>{
    const isMusicPaused = musicContainer.classList.contains("paused");
    if(isMusicPaused){
        pauseSong();
    }else{
        playSong();
    }
});

function playSong(){
    musicContainer.classList.add("paused");
    Audio.play();
    playPauseIcon.innerHTML = "pause";
}

function pauseSong(){
    musicContainer.classList.remove("paused");
    playPauseIcon.innerHTML = "play_arrow";
    Audio.pause();
}

// play next song event listner
nextButton.addEventListener("click", () => {
    playNext();
});

function playNext(){
    index++;
    if(index > songs.length ){
        index = 0;
    }
    loadMusic(index);
    playSong();
}

// play previouse song event listner
prevButton.addEventListener("click", ()=>{
    playPrev();
});

// play previous song function
function playPrev(){
    index--;
    if(index > songs.length ){
        index = 0;
    }
    loadMusic(index);
    playSong();
}

// repeat song event listner
repeatButton.addEventListener("click", ()=>{
    repeatSong();
})


// repeat song function
function repeatSong(){

}




