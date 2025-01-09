const numbersForm = document.getElementById("numbergrid");


function createNumberGrid(min, max) {
    const minNr = min;
    const maxNr = max;
}

for (let i = 0; i < maxNr; i++) {
    const randomNumberGrid = Math.floor(Math.random() * (maxNr - minNr)) + minNr;
    const gridCell = document.createElement("div");
    gridCell.classList.add("gridCell");
    gridCell.textContent = randomNumberGrid;
    cellNumberArray.push(randomNumberGrid);
    gridWrapper.appendChild(gridCell);
}

function createRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}