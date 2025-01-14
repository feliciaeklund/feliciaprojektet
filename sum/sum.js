document.addEventListener("DOMContentLoaded", function() {
    const resetButton = document.querySelector(".resetbutton");
    const gridContainer = document.getElementById("numbergrid");
    const sumofall = document.getElementById("numberinput"); 
    const sumInput = document.getElementById('suminput'); 

    function markNumber(event) {
        const cell = event.target;
        cell.classList.toggle('marked');
        updateMarkedSum();
    }

    function updateMarkedSum() {
        const markedCells = document.querySelectorAll('.gridCell.marked');
        let markedSum = 0;

        markedCells.forEach(cell => {
            markedSum += parseInt(cell.textContent);
        });

        sumInput.value = markedCells.length ? markedSum : '-';
    }

    function sumAllNumbers() {
        const allCells = document.querySelectorAll('.gridCell');
        let totalSum = 0;

        allCells.forEach(cell => {
            totalSum += parseInt(cell.textContent);
        });

        console.log("Total sum of all numbers:", totalSum); 
        sumofall.value = totalSum; 
    }

    function resetMarked() {
        const markedCells = document.querySelectorAll('.gridCell.marked');

        markedCells.forEach(cell => {
            cell.classList.remove('marked');
        });

        sumInput.value = "-"; 
    }

    resetButton.addEventListener('click', resetMarked);

    gridContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains("gridCell")) {
            markNumber(event);
        }
    });

    document.querySelector('button').addEventListener('click', () => {
        setTimeout(sumAllNumbers, 100); 
    });

    sumInput.value = "-";
});
