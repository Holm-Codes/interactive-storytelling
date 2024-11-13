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

let language = localStorage.getItem('language');
if (!language) {
    localStorage.setItem('language', 'dk');
    language = 'dk';
}

changeFlag();
changeText();

function changeFlag() {
    const flag = document.getElementById('change-language');
    flag.src = language == "dk" ? "images/dansk_tekst.webp": "images/eng_flag.webp";
}

function changeInnerText(element, dk, en) {
    // hvis condition bliver opfyldt (condition er værdien før spørgsmålstegnet)
    // så returner den venstre side af kolon
    // og hvis condition ikke bliver opfyldt så returner den højre side af kolon
    // condition i dette tilfælde er: language === 'dk'
    element.innerHTML = language === 'dk' ? dk : en;
}

function changeText() {
    //Den vælger alle elelemnte der har en class lang
    //Og nu kan jeg iterer, de forskelige elementer
    const langElements = document.getElementsByClassName('lang');

    // for loop
    // i - står for index og bruges til at vide hvilket element loopen er nået til
    // i - bliver opdateret med +1 efter hver element er gået igennem
    // langElements.length - 'length' propertien beskriver hvor mange elementer der er i langElements
    for (let i = 0; i < langElements.length; i++) {
        const element = langElements.item(i);
        // switch case er ligesom if/else statement
        switch (element.id) {
            case 'Vædderen': changeInnerText(element, 'Vædderen', 'Aries'); break;
            case 'Tyren': changeInnerText(element, 'Tyren', 'Taurus'); break;
            case 'Tvillingen': changeInnerText(element, 'Tvillingen', 'Gemini'); break;
            case 'Krebsen': changeInnerText(element, 'Krebsen', 'Cancer'); break;
            case 'Løven': changeInnerText(element, 'Løven', 'Leo'); break;
            case 'Jomfruen': changeInnerText(element, 'Jomfruen', 'Virgo'); break;
            case 'Vægten': changeInnerText(element, 'Vægten', 'Libra'); break;
            case 'Skorpionen': changeInnerText(element, 'Skorpionen', 'Scorpio'); break;
            case 'Skytten': changeInnerText(element, 'Skytten', 'Sagittarius'); break;
            case 'Stenbukken': changeInnerText(element, 'Stenbukken', 'Capricorn'); break;
            case 'Vandmanden': changeInnerText(element, 'Vandmanden', 'Aquarius'); break;
            case 'Fisken': changeInnerText(element, 'Fisken', 'Pisces'); break;

            // hvis man har længere tekst:
            case 'id':
                changeInnerText(
                    element,

                    // dansk
                    'Fisken',

                    // engelsk
                    'Pisces'
                );
                break;
        }
    }
}

function changeLanguage() {
    language = language == "dk" ? "en" : "dk";
    localStorage.setItem('language', language);
    changeFlag();
    changeText();
}

//Intro video//

const introVideo = document.getElementById('introVideo');
const mainContent = document.getElementById('mainContent');

// Add an event listener to the video to detect when it ends
introVideo.addEventListener('ended', () => {
    // Hide the video
    introVideo.style.display = 'none';
    
    // Show the main content
    mainContent.style.display = 'block';
});
