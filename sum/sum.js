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
