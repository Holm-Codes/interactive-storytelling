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

const introVideo = document.getElementById('introVideo');
const mainContent = document.getElementById('mainContent');

// Add an event listener to the video to detect when it ends
introVideo.addEventListener('ended', () => {
    // Hide the video
    introVideo.style.display = 'none';
    
    // Show the main content
    mainContent.style.display = 'block';
});
