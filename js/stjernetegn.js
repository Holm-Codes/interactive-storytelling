// Henter HTML-elementer og gemmer dem i konstanter for nemt at kunne referere til dem senere 
const delEt = document.getElementById("foersteDel"); 
const delTo = document.getElementById("andenDel");
const delTre = document.getElementById("tredjeDel");
const krop = document.querySelector("body"); 
const scrollBar = document.getElementById("scrollBar");



// Laver en funktion til min onscroll, da der er to funktioner der skal igangsættes når man scroller
window.onscroll = function () {
    flytBar(); // Sørger for funktionen flytBar starter når man scroller
    fadeInd(); // Sørger for funktionen fadeInd starter når man scroller
};


// TIL SCROLLBAREN

let scrollPosition; // Denne variabel gemmer den aktuelle position, man er scrollet ned til

function flytBar() { //Tilføjer en funktion der starter når jeg scroller
    const totalScrollableHeight = document.documentElement.scrollHeight - window.innerHeight; // Beregner den samlede højde af hele dokumentet minus højden af vinduet
    const viewportHeight = window.innerHeight; // Højden på selve vinduet (viewport)

    // Opdaterer den nuværende scrollposition
    scrollPosition = window.scrollY;

    const scrollBarPosition = (scrollPosition / totalScrollableHeight) * (viewportHeight - 120); // Beregner den relative position af scrollbaren, baseret på scrollpositionen

    // Opdaterer scrollbarens position på skærmen ved at sætte dens top-værdi i forhold til dens relative position
    scrollBar.style.top = scrollBarPosition + "px"; //Placerer baren i oppe i hjørnet, så den går ned ad
}


// FADE IN AF TEKSTERNE

function fadeInd() {
    const dele = [delEt, delTo, delTre]; // Opretter et array, der indeholder de elementer, som skal fade in og fade out

    dele.forEach((del) => { // Går gennem delene i arrayet og udfører funktionen på hver
        const positionInfo = del.getBoundingClientRect(); // Henter positionen af hvert element relativt til vinduet

        if (positionInfo.top < window.innerHeight - 150) { // Tjekker om toppen af elementet er tættere på bunden af vinduet

            del.style.opacity = "1"; // Sætter opaciteten til 1, når koden
        } else {                     //Siger til koden af hvis ikke højden er som defineret skal det fade ud igen
            del.style.opacity = "0"; // Tilføjer også en fading ud-effekt
        }
    });
}

// KODEN ER VALIDERET - ALT OK! 