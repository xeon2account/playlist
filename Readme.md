# Song4u UI

Song4u is a web-based music player that allows users to play, pause, and navigate through a playlist of songs. It features a visually appealing UI with animations, a searchable song list, and responsive design.

## Features

- **Play/Pause Controls**: Easily play or pause the current track.
- **Next/Previous Navigation**: Skip to the next or previous track in the playlist.
- **Dynamic Playlist**: Displays a searchable list of songs with thumbnails.
- **Waveform Animation**: Highlights the currently playing song with a waveform animation.
- **Responsive Design**: Works seamlessly on both desktop and mobile devices.
- **Keyboard Shortcuts Disabled**: Prevents certain developer tools and shortcuts for a secure experience.

## File Structure

```
.
├── index.html       # Main HTML file for the music player
├── style.css        # Stylesheet for the music player UI
├── script.js        # JavaScript file for player functionality
├── audiodb.js       # Playlist data with song details
```

## How to Use

1. Clone or download the repository.
2. Open `index.html` in your browser.
3. Use the controls to play, pause, or navigate through the playlist.
4. Click the menu icon to view the song list and search for songs.

## Playlist Data

The playlist is defined in [`audiodb.js`](d:/Music%20PLayer%20UI/audiodb.js). Each song in the playlist includes:
- `name`: The title of the song.
- `src`: The URL of the audio file.
- `thumb`: The URL of the thumbnail image.

Example:
```javascript
{
    name: "Mr.Kitty - After Dark",
    src: "https://files.catbox.moe/55z0xp.mp3",
    thumb: "https://files.catbox.moe/71l6k7.jpg"
}
```

## Development

### Prerequisites
- A modern web browser that supports ES6 modules.

### Running Locally
1. Ensure all files (`index.html`, `style.css`, `script.js`, `audiodb.js`) are in the same directory.
2. Open `index.html` in your browser.

### Customizing the Playlist
To add or modify songs, edit the `playlist` array in [`audiodb.js`](d:/Music%20PLayer%20UI/audiodb.js).

### Adding New Features
Modify [`script.js`](d:/Music%20PLayer%20UI/script.js) to add new functionality or improve existing features.

## Credits

- **Author**: DOTSERMODZ
- **Playlist Data**: Songs and thumbnails are sourced from external URLs.

## License

This project is for personal and educational use only. All song files and thumbnails are the property of their respective owners.
```
