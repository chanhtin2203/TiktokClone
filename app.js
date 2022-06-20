const $ = document.querySelector.bind(document);

const player = $('.app_main');

const playBtn = $('.container-video__user-controls');

const muteBtn = $('.container-video__user-controls-2');

const mutePlayer = $('.container-main-video');

const audio = $('#audio');

const isPlaying = false;


playBtn.onclick = function () {
    if (this.isPlaying) {
        this.isPlaying = false;
        audio.pause();
        player.classList.remove('playing')
    } else {
        this.isPlaying = true;
        audio.play();
        player.classList.add('playing')
    }
};

muteBtn.onclick = function() {
    if (this.isPlaying) {
        this.isPlaying = false;
        audio.muted = false;
        mutePlayer.classList.remove('mute')
    } else {
        this.isPlaying = true;
        audio.muted = true;
        mutePlayer.classList.add('mute')
    }
}


