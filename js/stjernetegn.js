
const delEt = document.getElementById("foersteDel");
const delTo = document.getElementById("andenDel");
const delTre = document.getElementById("tredjeDel");


// ----- SCROLLBAR --- //
const krop = document.querySelector("body");
const scrollBar = document.getElementById("scrollBar"); //Henter elementet fra HTML og giver den en konstant variabel scrollBar
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

// //Siger til koden at ved scroll skal funktionen flytBar sættes i gang
// window.onscroll = flytBar;
// // krop.onscrollend = test;


// // Når man scroller i vinduet kaldes funktionen minFunktion:
// window.onscroll = fadeInd;
// //vi spørger vinduet fordi det er når vinduet bliver scrollet 

window.onscroll = function () {
    flytBar();
    fadeInd();
};

function fadeInd() {
    const dele = [delEt, delTo, delTre];

    dele.forEach((del) => {
        const positionInfo = del.getBoundingClientRect();

        if (positionInfo.top < window.innerHeight - 150) {
            del.style.opacity = "1";
        } else {
            del.style.opacity = "0"; // Tilføjer også en fading ud-effekt
        }
    });
}

// function fadeInd() {
//     let andenPostionsinfo = delTo.getBoundingClientRect();
//     let tredjePostionsinfo = delTre.getBoundingClientRect();

//     if (andenPostionsinfo.top < window.innerHeight - 150) {
//         delTo.style.opacity = "1";
//     } else {
//         delTo.style.opacity = "0"; // Tilføjer også en fading ud-effekt
//     }

//     if (tredjePostionsinfo.top < window.innerHeight - 150) {
//         delTre.style.opacity = "1";
//     } else {
//         delTre.style.opacity = "0"; // Tilføjer også en fading ud-effekt
//     }


// }