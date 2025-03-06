document.addEventListener('DOMContentLoaded', (event) => {
    var audioPlayer = document.getElementById('audioPlayer');
    if (audioPlayer) {
        audioPlayer.play();
    } else {
        console.error('Audio player not found');
    }
});