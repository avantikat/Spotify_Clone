console.log ("Welcome to spotify")
//variables
let audioElement =new Audio("songs/1.mp3")
let songindex =0;
let masterplay = document.getElementById("masterplay")
let myprogressbar = document.getElementById("myProgressBar")
let songs = [
    {songName: "Bareilly Ke Bazaar", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Pyaar Hota Kayi Baar Hai", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "O Bedardeya", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Maine Pi Rakhi Hai", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Jhoome Jo Pathaan", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Apna Bana Le", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
    {songName: "Dil De Diya", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
    {songName: "Haaniya Ve", filePath: "songs/2.mp3", coverPath: "covers/8.jpg"},
    {songName: "Teri Ho Gayi", filePath: "songs/2.mp3", coverPath: "covers/9.jpg"},
    {songName: "Sun Aye MiliS", filePath: "songs/4.mp3", coverPath: "covers/10.jpg"},
]

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})