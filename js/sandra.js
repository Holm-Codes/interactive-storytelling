document.getElementById("play-sound").addEventListener("click", function() {
    console.log("Lyd afspilles");
    const audio = document.getElementById("audio");
    audio.play();
});

document.getElementById("change-language").addEventListener("click", function() {
    console.log("Sprog ændret");
    const zodiacNames = document.querySelectorAll(".zodiac span");
    zodiacNames.forEach((element) => {
        if (element.innerHTML === "Vædderen") {
            element.innerHTML = "Aries"; // Skift til engelsk
        } else if (element.innerHTML === "Tyren") {
            element.innerHTML = "Taurus";
        } else if (element.innerHTML === "Tvillingen") {
            element.innerHTML = "Gemini";
        }
        // Fortsæt for alle stjernetegn...
    });
});
