const numbersForm = document.getElementById("numbergrid");
function setupGridControls(containerId, gridContainerId) {
    const controlsContainer = document.getElementById(containerId);

    // Skapa text
    const label = document.createElement("label");
    label.textContent = "How many numbers in the grid? ";

function createNumberGrid(min, max) {
    const minNr = min;
    const maxNr = max;
    // Skapa inputfält
    const input = document.createElement("input");
    input.type = "number";
    input.min = 1; // Lägsta antal nummer
    input.value = 10; // Standardvärde

    // Skapa knappen
    const button = document.createElement("button");
    button.textContent = "Create";

    // Lägg till en klickhändelse på knappen
    button.addEventListener("click", () => {
        const gridSize = parseInt(input.value);
        if (isNaN(gridSize) || gridSize <= 0) {
            alert("Please enter a valid number greater than 0.");
            return;
        }
        createNumberGrid(gridSize, gridContainerId); // Skapa griden
    });

    // Lägg till elementen i container
    controlsContainer.appendChild(label);
    controlsContainer.appendChild(input);
    controlsContainer.appendChild(button);
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