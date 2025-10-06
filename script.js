import { playlist } from './audiodb.js';

const audio = document.getElementById('audio');
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const timeline = document.getElementById('timeline');
const currentTimeDisplay = document.getElementById('currentTime');
const durationDisplay = document.getElementById('duration');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const thumbnail = document.getElementById('thumbnail');
const songName = document.getElementById('songName');
const loading = document.getElementById('loading');

let currentTrack = Math.floor(Math.random() * playlist.length);

function loadTrack(index) {
    loading.style.display = 'flex';
    currentTrack = index;
    audio.src = playlist[currentTrack].src;
    thumbnail.src = playlist[currentTrack].thumb;
    songName.textContent = playlist[currentTrack].name;
    audio.load();
    audio.addEventListener('canplaythrough', () => {
        loading.style.display = 'none';
        updatePlayingIndicator(); // Update the playing indicator
    }, { once: true });
}

// Ensure the player starts in a paused state
playBtn.style.display = 'inline-block';
pauseBtn.style.display = 'none';

playBtn.addEventListener('click', () => {
  audio.play().catch(error => {
    console.error('Autoplay failed:', error);
  });
  playBtn.style.display = 'none';
  pauseBtn.style.display = 'inline-block';
});

pauseBtn.addEventListener('click', () => {
  audio.pause();
  pauseBtn.style.display = 'none';
  playBtn.style.display = 'inline-block';
});

// Fix for autoplaying the next song
audio.addEventListener('ended', () => {
  currentTrack = (currentTrack + 1) % playlist.length; // Move to the next track
  loadTrack(currentTrack); // Load the next track
  audio.play().catch(error => {
    console.error('Autoplay failed:', error);
  });
});

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

nextBtn.addEventListener('click', () => {
  currentTrack = (currentTrack + 1) % playlist.length; // Move to the next track
  loadTrack(currentTrack); // Load the next track
  audio.play().then(() => {
    playBtn.style.display = 'none';
    pauseBtn.style.display = 'inline-block';
  }).catch(error => {
    console.error('Autoplay failed:', error);
  });
});

prevBtn.addEventListener('click', () => {
  currentTrack = (currentTrack - 1 + playlist.length) % playlist.length; // Move to the previous track
  loadTrack(currentTrack); // Load the previous track
  audio.play().then(() => {
    playBtn.style.display = 'none';
    pauseBtn.style.display = 'inline-block';
  }).catch(error => {
    console.error('Autoplay failed:', error);
  });
});

function formatTime(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60).toString().padStart(2, '0');
  return `${min}:${sec}`;
}

function updatePlayingIndicator() {
    const songListItems = document.querySelectorAll('#songListItems li');
    songListItems.forEach((li) => {
        li.classList.remove('playing');
        li.querySelector('.waveform')?.remove();
    });

    const currentItem = document.querySelector(`#songListItems li[data-index="${currentTrack}"]`);
    if (currentItem) {
        currentItem.classList.add('playing');

        // Add waveform animation
        const waveform = document.createElement('div');
        waveform.classList.add('waveform');
        for (let i = 0; i < 3; i++) {
            const bar = document.createElement('span');
            waveform.appendChild(bar);
        }
        currentItem.appendChild(waveform);
    }
}

loadTrack(currentTrack);

document.addEventListener('contextmenu', (e) => e.preventDefault());
document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && ['u', 's', 'c', 'p'].includes(e.key.toLowerCase())) {
    e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && ['i', 'j'].includes(e.key.toLowerCase())) {
    e.preventDefault();
  }
  if (e.key === 'F12') {
    e.preventDefault();
  }
});

const songList = document.getElementById('songList');
const menuToggle = document.getElementById('menuToggle');

function populateSongList() {
    const searchBox = document.createElement('input');
    searchBox.type = 'text';
    searchBox.placeholder = 'Search songs...';
    searchBox.id = 'searchSongs';

    const ul = document.createElement('ul');
    ul.id = 'songListItems';

    playlist.forEach((track, index) => {
        const li = document.createElement('li');
        li.textContent = track.name;
        li.dataset.index = index;
        li.addEventListener('click', () => {
            loadTrack(index);
            songList.classList.add('hidden');
            audio.play().then(() => {
                playBtn.style.display = 'none';
                pauseBtn.style.display = 'inline-block';
            }).catch(error => {
                console.error('Autoplay failed:', error);
            });
        });
        ul.appendChild(li);
    });

    songList.innerHTML = '<h3 style="color: #00ffd5;">All Songs</h3>';
    songList.appendChild(searchBox);
    songList.appendChild(ul);

    searchBox.addEventListener('input', () => {
        const filter = searchBox.value.toLowerCase();
        document.querySelectorAll('#songListItems li').forEach(li => {
            li.style.display = li.textContent.toLowerCase().includes(filter) ? 'block' : 'none';
        });
    });
}

menuToggle.addEventListener('click', () => {
    songList.classList.toggle('hidden');
});

populateSongList();
updatePlayingIndicator();

document.addEventListener('click', (event) => {
  const isClickInside = songList.contains(event.target) || menuToggle.contains(event.target);
  if (!isClickInside) {
      songList.classList.add('hidden');
  }
});
