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
    const totalScrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const viewportHeight = window.innerHeight;

    // Update the current scroll position
    scrollPosition = window.scrollY;

    // Calculate the proportional position of the scrollbar
    const scrollBarPosition = (scrollPosition / totalScrollableHeight) * (viewportHeight - 120); // 50 is an arbitrary height for scrollBar

    scrollBar.style.top = scrollBarPosition + "px"; //Værdien kan ændres, eks. style.right
}


// FADE IN AF TEKSTERNE

function fadeInd() {
    const dele = [delEt, delTo, delTre]; // Definerer et array med de dele, der skal fade in/out

    dele.forEach((del) => { // Går gennem delene i arrayet og udfører funktionen på hver
        const positionInfo = del.getBoundingClientRect(); // Henter positionen af hvert element relativt til vinduet

        if (positionInfo.top < window.innerHeight - 150) { // Siger til koden at, hvis toppen af elementet er mindre end vinduets højde minus 150px,
            del.style.opacity = "1"; // Sætter opaciteten til 1, når koden
        } else { //Siger til koden af hvis ikke højden er som defineret skal det fade ud igen
            del.style.opacity = "0"; // Tilføjer også en fading ud-effekt
        }
    });
}

starIcon.addEventListener('click', () => {
    if (infographic.style.display === 'none' || !infographic.style.display) {
        infographic.style.display = 'block';
        starContainer.classList.add('icon-move');
    } else {
        infographic.style.display = 'none';
        starContainer.classList.remove('icon-move');
    }
});

// KODEN ER VALIDERET - ALT OK! 