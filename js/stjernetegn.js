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

/* Kalender */
/* Laver reference til dropdown menuerne. 'const' i stedet for 'var', da disse ikke ændres senere */
const yearSelect = document.getElementById("year"); 
const monthSelect = document.getElementById("month");
const daySelect = document.getElementById("day");

/* Definerer array til måned. 'const' fordi disse ikke ændres*/
const months = ["Januar", "Februar", "Marts", "April", 
"Maj", "Juni", "Juli", "August", "September", "Oktober",
"November", "December"];

/* Functionen starter med det samme. Udfylder måned dropdown menu */
(function populateMonths(){
    for(let i = 0; i < months.length; i++){ /* Går igennem måned array, starter altid med Januar (position 0). */
        const option = document.createElement("option"); /*Opretter et option element(valg) til hver måned */
        option.textContent = months[i]; /*Tekstinholdet af option elementet sættes til den aktuelle måned af måned-arrayet.*/
        monthSelect.appendChild(option); /*Reference til downdown menuen. Indsætter den valgte måned (option) i dropdown menuen*/
    }
    monthSelect.value = "Januar"; /*sætter standarden for dropdownmenuen til at være Januar*/
})();

/* Functionen starter med det samme. Udfylder dag dropdown menu */
function populateDays(month){ /* Tager højde for måneden, da mængden af dage i dropdown menuen afhænger hvilken måned man vælger.*/
    while(daySelect.firstChild){
        daySelect.removeChild(daySelect.firstChild); /* Dette sletter alle mulighederne i dropdown menuen, fordi koden skal kaldes igen hevr gang en ny måned vælges (da mængden af dage afhænger af måneden)*/
    }
    /*Variable som opbevarer mængden af dage i måneden*/
    let dayNum;
    /*Indhenter det nuværende årstal*/
    let year = yearSelect.value;

    /*Definerer dagene på de respektive måneder og ved brug af if, else if, else definerer mængen af dage*/
    if(month === "Januar" || month === "Marts" ||
    month === "Maj" || month === "Juli" || month === "August" ||
    month === "Oktober" || month === "December") {
        dayNum = 31;
    } else if(month === "April" || month === "Juni" ||
    month === "September" || month === "November") {
        dayNum = 30;
    }else{ /*Definerer antal dage for februar, og tjekker for og tager højde for skudår*/
        if(new Date(year, 1, 29).getMonth() === 1){
            dayNum = 29;
        }else{ /*Hvis (if) det ikke er skudår, bliver antal dage for Februar 28*/
            dayNum = 28;
        }
    }
    /*Sørger for at indsætte de rigtige dage i dropdown menuen*/
    for(let i = 1; i <= dayNum; i++){ /*Starter med 1, da 1 er den laveste dato der kan vælges. */
        const option = document.createElement("option"); /*Opretter et option element(valg) til hver dag */
        option.textContent = i; /*Tekstinholdet af option elementet sættes til den aktuelle dag som er valgt*/
        daySelect.appendChild(option); /*Reference til downdown menuen, indsætter den valgte dag (option) i dropdown menuen.*/
    }
}
/*Functionen starter med det samme. Udfylder år dropdown menu*/
function populateYears(){
    let year = new Date().getFullYear(); /*Indsætter det nuværende årstal. Gør årstallet til et tal*/

    for(let i = 0; i <101; i++){ /*Tager højde for det nuværende årstal, og gør de sidste 100 til en option(valg)*/
        const option = document.createElement("option");
        option.textContent = year - i; /*Opretter et option element(valg). Starter med det nuværende årstal, og tæller derefter ned af. */
        yearSelect.appendChild(option); /*Reference til downdown menuen. Indsætter det valgte årstal (option) i dropdown menuen*/
    }
}

/*Når årstal of måned ændre sig, ændrer antal dage sig tilsvarende*/

populateDays(monthSelect.value);
populateYears();

yearSelect.onchange = function(){
    populateDays(monthSelect.value);
}
monthSelect.onchange = function (){
    populateDays(monthSelect.value);
}

/* Klokkeslet */
document.addEventListener('DOMContentLoaded', () => { /* Gør så scriptet kører når sitet er loadet */
    const hourSelect = document.getElementById('hourSelect'); /* Laver reference til dropdown menu. Bruges til at vise time */
    const minuteSelect = document.getElementById('minuteSelect'); /* Laver reference til dropdown menu. Bruges til at vise minut*/

    // Indsætter timetal drop down menu (fra 0 til 23)
    for (let i = 0; i < 24; i++) { /*Et loop kører fra 0 til 23 og laver hver time inkl. 0 og 23 til en option*/
    const hourOption = document.createElement('option'); /*Et option element er lavet for hver time*/
    hourOption.value = i; /*Sætter værdien til option elementet til at være den nuværende time*/
    hourOption.textContent = i < 10 ? `0${i}` : i; /*Gør så det vises et 0 før encifret tal (ex. 1, 2, 3.) så det bliver til 01, 02, 03 etc. Definerer timerne efter kl. 12 om natten. */
    hourSelect.appendChild(hourOption); /*Reference til downdown menuen. Indsætter den valgte time (option) i dropdown menuen*/
    }

    // Indsætter minuttal dropw down menu( fra 0 til 59)
    for (let i = 0; i < 60; i++) { /*Et loop kører fra 0 til 59 og laver hvert minut inkl. 0 og 59 til en option*/
    const minuteOption = document.createElement('option'); /*Et nyt option element laves for hvert minut*/
    minuteOption.value = i; /*Sætter værdien til option elementet til at være det nuværense minut*/
    minuteOption.textContent = i < 10 ? `0${i}` : i; /*Gør så det tekstindholdet for hvert minut indledes med et 0 hvis tallet er mindre end 10. Se eksempel ovenfor*/
    minuteSelect.appendChild(minuteOption); /*Reference til downdown menuen. Indsætter det valgte minuttal (option) i dropdown menuen*/
    }
});

/* Big 3*/
document.addEventListener('DOMContentLoaded', () => { /*Sørger for scriptet først kører når sitet er loadet*/
    const content1 = document.getElementById('content1');/* Laver reference til HTMLen og henter elementet.  */
    const content2 = document.getElementById('content2');/* Laver reference til HTMLen og henter elementet. */
    const toggleButton = document.getElementById('toggleButton'); /*Laver reference til HTMLen. Henter den knap som brugeren skal trykke på for at funktionen kan køres.*/

    toggleButton.addEventListener('click', () => { /*Tilføjer en click event listener til knappen*/
        if (content1.style.display === 'none' || content1.style.display === '') { /*Tjekker om content1 er skjult*/
            content1.style.display = 'block'; /*Hvis content1 er skjult gøres den synlgit ved at sætte display til block*/
            content2.style.display = 'none'; /*Skjuler content2 ved at sætte display til none*/
        } else {
            content1.style.display = 'none'; /*Hvis content1 er synlig skjules den ved at sætte display til none*/
            content2.style.display = 'block'; /*Gøre content2 synlig ved at sætte display til blovk*/
        }
    });
});

/* Infografikken */
/* Skjuler infografikken indtil stjerneikonet bliver trykket. Animerer ikonet*/
starIcon.addEventListener('click', () => { /*Tilføjer en click event listening, der gør at funktionen kører når starIcon (ikonet) klikkes på*/
    if (infographic.style.display === 'none' || !infographic.style.display) { /*Tjekker om infograffiken er skjult på nuværende tidpsunkt*/
        infographic.style.display = 'block'; /*Hvis infografikken ikke er skjult, sættes display til block så den bliver synlig. */
        starContainer.classList.add('icon-move');/*Gør at ikonet animeres (rykkes til venstre, se css)*/
    } else {
        infographic.style.display = 'none'; /*Hvis infografikken allerede er synlig kører følgende funktion, infografikken skjules igen ved at ændre display til none*/
        starContainer.classList.remove('icon-move'); /*Ikonets position nulstilles og rykkes tilbage hvor den startede (så tilbage i midten of væk fra venstre*/
    }
});

// KODEN ER VALIDERET - ALT OK! 