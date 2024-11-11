// Hent lyd-elementet og højttaler-ikonet
const playSoundButton = document.getElementById('play-sound');
const audio = document.getElementById('audio');

// Tilføj en event listener til klik på højtaler-ikonet
playSoundButton.addEventListener('click', function() {
    if (audio.paused) {
        // Hvis lyden er stoppet, start den
        audio.play();
        playSoundButton.src = "images/lyd_pause_ikon.webp";  // Skift ikon til pause
    } else {
        // Hvis lyden er i gang, stop den
        audio.pause();
        playSoundButton.src = "images/lyd_ikon.webp";  // Skift ikon til play
    }
});
