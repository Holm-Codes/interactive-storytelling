

console.log("JavaScript loaded");

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

// zodiacData er et objekt, der gemmer data for de 12 stjernetegn. Hvert stjernetegn fungerer som en nøgle
// (f.eks. "Vædderen", "Tyren") med en værdi, der er et indlejret objekt. Dette indlejrede objekt indeholder:
// - image: stien til en billedfil, der repræsenterer stjernetegnet, f.eks. "images/vaedderen.webp"
// - description: en kort tekst, der beskriver karakteristika ved stjernetegnet
// Denne objektstruktur gør det let at hente billedet og beskrivelsen for et specifikt stjernetegn,
// hvilket kan bruges til dynamisk at vise disse oplysninger i en detaljevisning, når brugeren klikker på et stjernetegn.

const zodiacData = {
    "Vædderen": {
        image: "images/vaedderen.webp",
        description: "Er du altid den første, der hopper på nye eventyr? Som Vædder trives du med udfordringer, fart og passion – din energi er smitsom! Klik videre og se, hvad der driver dig."
    },
    "Tyren": {
        image: "images/tyren.webp",
        description: "Er du kendt som den loyale, lidt stædige ven? Som Tyr elsker du stabilitet og de gode ting i livet – fra lækker mad til lange, trygge relationer. Læs mere om, hvad der gør dig til Tyren, alle vil kende."
    },
    "Tvillingen": {
        image: "images/tvillingen.webp",
        description: "Social sommerfugl eller filosofisk tænker? Tvillingens to sider gør dig uforudsigelig, sjov og nysgerrig på alt. Er du klar til at lære dine egne dybeste hemmeligheder at kende?"
    },
    "Krebsen": {
        image: "images/krebsen.webp",
        description: "Er dit hjem din base, og dine venner som familie? Som Krebs er du kærlig, beskyttende og har et hjerte af guld. Dyk ned i, hvad der gør dig til en ægte Krebs, og find ud af, hvorfor alle vil have en som dig!"
    },
    "Løven": {
        image: "images/loeven.webp",
        description: "Træd ind i Løvens verden, hvor selvsikkerhed og kreativitet hersker! Med evnen til at lede og charmere, tager Løven centrum og spreder livsglæde. Klar til at lade din passion føre dig mod dine drømme?"
    },
    "Jomfruen": {
        image: "images/jomfruen.webp",
        description: "Detaljeorienteret og praktisk? Som Jomfru er du kendt for din analytiske evne og hjælpsomhed. Gå på opdagelse i, hvad der gør dig til en pålidelig støtte for dem omkring dig."
    },
    "Vægten": {
        image: "images/vaegten.webp",
        description: "Prøver du altid på at skabe harmoni? Som Vægt elsker du skønhed, fairness og meningsfulde forbindelser. Opdag, hvorfor alle vil have dig med, når tingene skal falde på plads."
    },
    "Skorpionen": {
        image: "images/scorpionen.webp",
        description: "Er du fascineret af alt, der går dybt? Skorpionen går aldrig på kompromis og er kendt for sin intensitet og mystik. Udforsk, hvad der gemmer sig bag dit passionerede ydre."
    },
    "Skytten": {
        image: "images/skytten.webp",
        description: "Eventyrlysten, fri og altid på vej mod nye horisonter? Skytten elsker livet, filosofien og de store spørgsmål. Se hvad der giver dig din umættelige appetit på verden!"
    },
    "Stenbukken": {
        image: "images/stenbukken.webp",
        description: "Er du ambitiøs og har altid et mål for øje? Som Stenbuk klatrer du støt mod toppen med fokus og beslutsomhed. Klik her for at få indsigt i, hvad der driver din succes."
    },
    "Vandmanden": {
        image: "images/vandmanden.webp",
        description: "Er du en, der tør være anderledes? Som Vandmanden tænker du originalt og er altid et skridt foran med dine idéer."
    },
    "Fisken": {
        image: "images/fisken.webp",
        description: "Drømmer du ofte væk i din egen verden? Fiskene er dybt følsomme, kreative og intuitivt forbundne med alt omkring dem. Dyk ned i, hvad der gør din verden så magisk og grænseløs."
    }
};
// Funktion til at vise detaljer for et valgt stjernetegn.
// showZodiacDetails(zodiacName) kaldes med navnet på stjernetegnet og opdaterer HTML'en,
// så billedet, navnet og beskrivelsen af stjernetegnet vises i en detaljevisning.

function showZodiacDetails(zodiacName) {
    console.log("showZodiacDetails called with: ", zodiacName); // Debugging: Bekræfter i konsollen, at funktionen kaldes med det rigtige zodiacName.

    // Flytter cirklen med stjernetegn til venstre ved at tilføje klassen "move-left" til .container,
    // hvilket skaber plads til detaljevisningen af det valgte stjernetegn.
    document.querySelector(".container").classList.add("move-left");

    // Henter elementer til detaljevisningen for at kunne opdatere dem med data for det valgte stjernetegn:
    const zodiacImage = document.getElementById("zodiac-image"); // Billed-element til at vise stjernetegnets billede
    const zodiacTitle = document.getElementById("zodiac-name"); // Titel-element til at vise stjernetegnets navn
    const zodiacDescription = document.getElementById("zodiac-description"); // Beskrivelse-element til at vise stjernetegnets beskrivelse

    // Finder data for det valgte stjernetegn og opdaterer HTML-elementerne:
    const data = zodiacData[zodiacName]; // Henter billed- og beskrivelsesdata fra zodiacData for det valgte stjernetegn
    zodiacImage.src = data.image; // Opdaterer billedet i detaljevisningen
    zodiacTitle.textContent = zodiacName; // Opdaterer navnet i detaljevisningen
    zodiacDescription.textContent = data.description; // Opdaterer beskrivelsen i detaljevisningen

    // Tilføjer klassen "active" til elementet med id'et "zodiac-details" for at vise detaljevisningen.
    document.getElementById("zodiac-details").classList.add("active");
}

// Funktion til at skjule detaljevisningen, når brugeren vælger at forlade detaljevisningen.
function hideZodiacDetails() {
    document.getElementById("zodiac-details").classList.remove("active"); // Fjerner klassen "active" for at skjule detaljevisningen.
    window.location.href = 'stjernetegn.html'; // Navigerer tilbage til hovedsiden (stjernetegn.html).
}