const introTekst = document.getElementsByClassName("indledendetekst");


// ----- SCROLLBAR --- //
const krop = document.querySelector("body"); 
const scrollBar = document.getElementById("scrollBar"); //Henter elementet fra HTML og giver den en konstant variabel scrollBar
let scrollPosition; // Denne variabel gemmer den aktuelle position, man er scrollet ned til

function flytBar(){ //Tilføjer en funktion der starter når jeg scroller
    scrollPosition = Math.round(window.scrollY); // math.round 
    console.log(scrollPosition);
    scrollBar.style.top = scrollPosition + "px"; //Værdien kan ændres, eks. style.right
}

//Siger til koden at ved scroll skal funktionen flytBar sættes i gang
window.onscroll = flytBar; 
krop.onscrollend = test;

function fadeInd(){
let foerste_positionsinfo = introTekst.getBoundingClientRect();

if(foerste_positionsinfo.top < window.innerHeight - 150){
    introTekst.style.opacity = "1";
}

}