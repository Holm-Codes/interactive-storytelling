

console.log("JavaScript loaded");
document.getElementById("play-sound").addEventListener("click", function() {
    console.log("Lyd afspilles");
    const audio = document.getElementById("audio");
    audio.play();
});


// Data for stjernetegn
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
// Funktion til at vise detaljer for et stjernetegn
function showZodiacDetails(zodiacName) {
    console.log("showZodiacDetails called with: ", zodiacName); // Debugging: Tjek om funktionen kaldes

    // Flyt cirklen til venstre
    document.querySelector(".container").classList.add("move-left");

    // Hent elementer til detaljevisning
    const zodiacImage = document.getElementById("zodiac-image");
    const zodiacTitle = document.getElementById("zodiac-name");
    const zodiacDescription = document.getElementById("zodiac-description");

    // Opdater detaljevisningen med det valgte stjernetegn
    const data = zodiacData[zodiacName];
    zodiacImage.src = data.image;
    zodiacTitle.textContent = zodiacName;
    zodiacDescription.textContent = data.description;

    // Vis detaljeområdet
    document.getElementById("zodiac-details").classList.add("active");
}

// Funktion til at skjule detaljevisningen
function hideZodiacDetails() {
    document.getElementById("zodiac-details").classList.remove("active");
}