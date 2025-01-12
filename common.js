function setupGridControls(containerId, gridContainerId) {
    const controlsContainer = document.getElementById(containerId);

    // Skapa text
    const label = document.createElement("label");
    label.textContent = "How many numbers in the grid? ";

    // Skapa inputfält
    const input = document.createElement("input");
    input.type = "number";
    input.min = 1; // Lägsta antal nummer
    input.value = 95; // Standardvärde

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

// Funktion för att skapa griden
function createNumberGrid(gridSize, gridContainerId) {
    const gridContainer = document.getElementById(gridContainerId);
    gridContainer.innerHTML = ""; // Rensa eventuell gammal grid

    for (let i = 0; i < gridSize; i++) {
        const cell = document.createElement("div");
        cell.classList.add("gridCell");
        cell.textContent = Math.floor(Math.random() * 100); // Slumptal mellan 0-99
        gridContainer.appendChild(cell);
    }
}

// Initiera kontroller när sidan laddas
document.addEventListener("DOMContentLoaded", () => {
    setupGridControls("controlsContainer", "numbergrid");
    // Skapa länken för home-knappen
    const homeButtonDiv = document.querySelector('.homebutton');
    const homeLink = document.createElement('a');
    homeLink.href = '../index.html'; // Använd relativ sökväg för att länka till index.html från mappar
    homeLink.textContent = 'Home'; // Texten som visas
    homeButtonDiv.appendChild(homeLink);
});
