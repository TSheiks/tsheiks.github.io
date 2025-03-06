audioPlayer = document.createElement('audio');
        audioPlayer.id = 'audioPlayer';
        audioPlayer.controls = true;
        audioPlayer.autoplay = true;
        document.body.appendChild(audioPlayer);
        audioPlayer.src = 'https://listen.181fm.com/181-beat_128k.mp3';
        audioPlayer.play();