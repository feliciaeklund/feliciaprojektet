document.addEventListener("DOMContentLoaded", () => {
    const gridContainer = document.getElementById("numbergrid");
    const repInputNumber = document.getElementById("repinputnumber");
    const repInput = document.getElementById("repinput");

    const findMostRepeatedNumbers = () => {
        const allCells = document.querySelectorAll('.gridCell');
        const numberCounts = {};
        const repeatedNumbers = [];
        let totalRepetitions = 0;

        allCells.forEach(cell => {
            const number = parseInt(cell.textContent);
            numberCounts[number] = (numberCounts[number] || 0) + 1;
        });

        Object.entries(numberCounts).forEach(([number, count]) => {
            if (count > 1) {
                repeatedNumbers.push(number);
                totalRepetitions += count; // Lägg till antalet repetitioner
                allCells.forEach(cell => {
                    if (parseInt(cell.textContent) === parseInt(number)) {
                        cell.style.backgroundColor = 'lightblue';
                    }
                });
            }
        });

        repInputNumber.innerHTML = repeatedNumbers.length ? `${repeatedNumbers.join(', ')} (${totalRepetitions} repetitions)` : 'None';
    };

    const findNumbersNotInPlace = () => {
        const allCells = document.querySelectorAll('.gridCell');
        const gridNumbers = new Set();

        allCells.forEach(cell => gridNumbers.add(parseInt(cell.textContent)));

        const numbersNotInPlace = [];
        for (let i = 0; i < 100; i++) {
            if (!gridNumbers.has(i)) numbersNotInPlace.push(i);
        }

        repInput.innerHTML = numbersNotInPlace.length ? numbersNotInPlace.join(', ') : 'None';
    };

    document.querySelector('button').addEventListener('click', () => {
        setTimeout(() => {
            findMostRepeatedNumbers();
            findNumbersNotInPlace();
        }, 100);
    });
});


