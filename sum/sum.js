document.addEventListener("DOMContentLoaded", function() {
    const resetButton = document.querySelector(".resetbutton");
    const gridContainer = document.getElementById("numbergrid");
    const sumofall = document.getElementById("numberinput"); // Kontrollera att detta ID är korrekt
    const sumInput = document.getElementById('suminput'); // Inputfältet för summan

    // Funktionen för att markera nummer
    function markNumber(event) {
        const cell = event.target;
        cell.classList.toggle('marked');
        updateMarkedSum();
    }

    // Funktionen för att uppdatera summan av markerade nummer
    function updateMarkedSum() {
        const markedCells = document.querySelectorAll('.gridCell.marked');
        let markedSum = 0;

        markedCells.forEach(cell => {
            markedSum += parseInt(cell.textContent);
        });

        // Uppdatera inputfältet baserat på om det finns markerade celler eller inte
        sumInput.value = markedCells.length ? markedSum : '-';
    }

    // Funktion för att summera alla nummer i griden
    function sumAllNumbers() {
        const allCells = document.querySelectorAll('.gridCell');
        let totalSum = 0;

        allCells.forEach(cell => {
            totalSum += parseInt(cell.textContent);
        });

        console.log("Total sum of all numbers:", totalSum); // Logg för felsökning
        sumofall.value = totalSum; // Uppdatera inputfältet med total summa
    }

    // Funktionen för att återställa markerade nummer
    function resetMarked() {
        const markedCells = document.querySelectorAll('.gridCell.marked');

        markedCells.forEach(cell => {
            cell.classList.remove('marked');
        });

        sumInput.value = "-"; // Återställ summan
    }

    // Lägg till event listener för reset-knappen
    resetButton.addEventListener('click', resetMarked);

    // Lägg till event listener för grid-klick
    gridContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains("gridCell")) {
            markNumber(event);
        }
    });

    // Summera alla nummer när griden skapas
    document.querySelector('button').addEventListener('click', () => {
        setTimeout(sumAllNumbers, 100); // Vänta tills griden är skapad
    });

    // Initialisera inputfältet med "-"
    sumInput.value = "-";
});
