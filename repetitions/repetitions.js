    const gridContainer = document.getElementById("numbergrid");
    const repInputNumber = document.getElementById("repinputnumber");
    const repInput = document.getElementById("repinput");

    const findMostRepeatedNumbers = () => {
        const allCells = document.querySelectorAll('.gridCell');
        const numberCounts = {};
        const repeatedNumbers = [];
        let totalRepetitions = 0;


    const findNumbersNotInPlace = () => {
        const allCells = document.querySelectorAll('.gridCell');
        const gridNumbers = new Set();

        allCells.forEach(cell => gridNumbers.add(parseInt(cell.textContent)));

