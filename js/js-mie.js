/**
 * file: js/js.js
 * purpose: Behaviors
 **/
console.log('Success: JavaScript from js/js.js running!')

/* https://www.youtube.com/watch?v=IPGbM6HgWEA&ab_channel=QixotlLFC */

    const yearSelect = document.getElementById("year");
    const monthSelect = document.getElementById("month");
    const daySelect = document.getElementById("day");

    const months = ["Januar", "Februar", "Marts", "April", 
    "Maj", "Juni", "Juli", "August", "September", "Oktober",
    "November", "December"];

    (function populateMonths(){
        for(let i = 0; i < months.length; i++){
            const option = document.createElement("option");
            option.textContent = months[i];
            monthSelect.appendChild(option);
        }
        monthSelect.value = "Januar";
    })();

    function populateDays(month){
        while(daySelect.firstChild){
            daySelect.removeChild(daySelect.firstChild);
        }

        let dayNum;

        let year = yearSelect.value;

        if(month === "Januar" || month === "Marts" ||
        month === "Maj" || month === "Juli" || month === "August" ||
        month === "Oktober" || month === "December") {
            dayNum = 31;
        } else if(month === "April" || month === "Juni" ||
        month === "September" || month === "November") {
            dayNum = 30;
        }else{
            if(new Date(year, 1, 29).getMonth() === 1){
                dayNum = 29;
            }else{
                dayNum = 28;
            }
        }
        
        for(let i = 1; i <= dayNum; i++){
            const option = document.createElement("option");
            option.textContent = i;
            daySelect.appendChild(option);
        }
    }

    function populateYears(){
        let year = new Date().getFullYear();

        for(let i = 0; i <101; i++){
            const option = document.createElement("option");
            option.textContent = year - i;
            yearSelect.appendChild(option);
        }
    }

    populateDays(monthSelect.value);
    populateYears();

    yearSelect.onchange = function(){
        populateDays(monthSelect.value);
    }
    monthSelect.onchange = function (){
        populateDays(monthSelect.value);
    }

    /* Time picker javascript*/
    document.addEventListener('DOMContentLoaded', () => {
        const hourSelect = document.getElementById('hourSelect');
        const minuteSelect = document.getElementById('minuteSelect');
    
        // Populate the hours dropdown (0 to 23)
        for (let i = 0; i < 24; i++) {
        const hourOption = document.createElement('option');
        hourOption.value = i;
        hourOption.textContent = i < 10 ? `0${i}` : i;
        hourSelect.appendChild(hourOption);
        }
    
        // Populate the minutes dropdown (0 to 59)
        for (let i = 0; i < 60; i++) {
        const minuteOption = document.createElement('option');
        minuteOption.value = i;
        minuteOption.textContent = i < 10 ? `0${i}` : i;
        minuteSelect.appendChild(minuteOption);
        }
    });

    const codeSnippet1 = `// Code Snippet 1
    function sayHello() {
        console.log("Hello, World!");
    }`;
    
            const codeSnippet2 = `// Code Snippet 2
    function addNumbers(a, b) {
        return a + b;
    }`;
    
            // Track the current state
            let toggleState = true;
    
            // Reference to the code container
            const codeContainer = document.getElementById('codeContainer');
            const toggleButton = document.getElementById('big3-beregn');
    
            // Function to toggle between code snippets
            toggleButton.addEventListener('click', () => {
                if (toggleState) {
                    codeContainer.textContent = codeSnippet1;
                } else {
                    codeContainer.textContent = codeSnippet2;
                }
                toggleState = !toggleState; // Toggle the state
            });

