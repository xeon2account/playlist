import { playlist } from './audiodb.js';

const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPauseBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const timeline = document.getElementById('timeline');
const currentTimeDisplay = document.getElementById('currentTime');
const durationDisplay = document.getElementById('duration');
const thumbnail = document.getElementById('thumbnail');
const songName = document.getElementById('songName');

let currentTrack = 0;
let isPlaying = false;

function loadTrack(index) {
  currentTrack = index;
  const track = playlist[currentTrack];
  audio.src = track.src;
  thumbnail.src = track.thumb;
  songName.textContent = track.name;
  audio.load();
}

function togglePlayPause() {
  if (!isPlaying) {
    audio.play();
    playPauseBtn.textContent = '⏸️';
  } else {
    audio.pause();
    playPauseBtn.textContent = '▶️';
  }
  isPlaying = !isPlaying;
}

function nextTrack() {
  currentTrack = (currentTrack + 1) % playlist.length;
  loadTrack(currentTrack);
  if (isPlaying) audio.play();
}

function prevTrack() {
  currentTrack = (currentTrack - 1 + playlist.length) % playlist.length;
  loadTrack(currentTrack);
  if (isPlaying) audio.play();
}

function formatTime(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60).toString().padStart(2, '0');
  return `${min}:${sec}`;
}

audio.addEventListener('loadedmetadata', () => {
  timeline.max = Math.floor(audio.duration);
  durationDisplay.textContent = formatTime(audio.duration);
});

audio.addEventListener('timeupdate', () => {
  timeline.value = Math.floor(audio.currentTime);
  currentTimeDisplay.textContent = formatTime(audio.currentTime);
});

timeline.addEventListener('input', () => {
  audio.currentTime = timeline.value;
});

audio.addEventListener('ended', () => nextTrack());

playPauseBtn.addEventListener('click', togglePlayPause);
nextBtn.addEventListener('click', nextTrack);
prevBtn.addEventListener('click', prevTrack);

loadTrack(currentTrack);

// 🔒 Prevent right-click, F12, and devtools
document.addEventListener('contextmenu', e => e.preventDefault());
document.addEventListener('keydown', e => {
  if (
    e.key === 'F12' ||
    (e.ctrlKey && ['u', 's', 'p', 'c'].includes(e.key.toLowerCase())) ||
    (e.ctrlKey && e.shiftKey && ['i', 'j'].includes(e.key.toLowerCase()))
  ) e.preventDefault();
});
