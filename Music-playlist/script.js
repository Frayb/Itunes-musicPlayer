
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
const progBar = document.querySelector('.progess-bar');
const progArea = document.querySelector('.progress-area');
const elapsed = document.querySelector('.current-time')
const remainingTime = document.querySelector('.remaining-time')





let index = Math.floor(Math.random()*songs.length);

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

// event listener to an Audio element 
//that updates a progress bar as the audio plays
Audio.addEventListener("timeupdate", (e)=>{
    const startTime = e.target.currentTime;
    const finalTime = e.target.duration;
    let barWidth = (startTime/finalTime)*100;
    progBar.style.width = barWidth + "%";


    //Format elapsed time
    const elapsedMinutes = Math.floor(startTime/60);
    const elapsedSeconds = Math.floor(startTime % 60);
    const elapsedFormated = `${elapsedMinutes}:${elapsedSeconds.toString().padStart(2, '0')}`;
    elapsed.textContent = elapsedFormated;

    // Formate time remaining
    const remainingSeconds = Math.floor(finalTime - startTime);
    const remainingFormatted = `-${Math.floor(remainingSeconds / 60)}:${(remainingSeconds % 60).toString().padStart(2, '0')}`;
    remainingTime.textContent = remainingFormatted;

    progArea.addEventListener("click", (e) =>{
        let progressValue = progArea.clientWidth; //width of progress bar
        let clickedOffsetX = e.offsetX; // X position of the click
        let songDuration = Audio.duration; //total duation of the audio
        Audio.currentTime = (clickedOffsetX / progressValue)*songDuration;
    })
});



