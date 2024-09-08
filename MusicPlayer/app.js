let songIndex = 0;
let audioElement = new Audio('songs/1.m4a');
let masterPlay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let mastersong = document.getElementById('mastersong');
let songItem = Array.from(document.getElementsByClassName('songitem')); // Correct the case
let songs = [
    { songName: "London Thumakda", filePath: "songs/1.m4a", coverPath: "covers/1.jpg" },
    { songName: "Kamariyaa", filePath: "songs/2.m4a", coverPath: "covers/2.jpg" },
    { songName: "Badtameez Dil", filePath: "songs/3.m4a", coverPath: "covers/3.jpg" },
    { songName: "Dil Chori", filePath: "songs/4.m4a", coverPath: "covers/4.jpg" },
    { songName: "Mitran de junction", filePath: "songs/5.m4a", coverPath: "covers/5.jpg" },
    { songName: "Label Black", filePath: "songs/6.m4a", coverPath: "covers/6.jpg" },
    { songName: "Teeje Week", filePath: "songs/7.m4a", coverPath: "covers/7.jpg" },
    { songName: "Laden", filePath: "songs/8.m4a", coverPath: "covers/8.jpg" },
];

// Populate song list with song data
songItem.forEach((element, index) => {
    element.getElementsByTagName('img')[0].src = songs[index].coverPath;
    element.getElementsByClassName('songname')[0].innerText = songs[index].songName;
});

// Handle master play button
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
});

// Update progress bar
audioElement.addEventListener('timeupdate', () => {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myprogressbar.value = progress;
});

// Change song time on progress bar input
myprogressbar.addEventListener('change', () => {
    audioElement.currentTime = (myprogressbar.value * audioElement.duration) / 100;
});

// Reset all song play buttons
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    });
}

// Handle individual song play buttons
Array.from(document.getElementsByClassName('songPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        if (audioElement.paused || audioElement.currentTime<=0) {
            makeAllPlays();
            songIndex = parseInt(e.target.id) - 1; // Fix the index by adjusting for 0-based index
            audioElement.src = songs[songIndex].filePath; // Use correct filePath from the songs array
            mastersong.innerText = songs[songIndex].songName;
            audioElement.currentTime = 0;
            audioElement.play();
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause');
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
            gif.style.opacity = 1;
        } else {
            e.target.classList.remove('fa-circle-pause');
        e.target.classList.add('fa-circle-play');
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');

        gif.style.opacity=0;
        }
    });
});
