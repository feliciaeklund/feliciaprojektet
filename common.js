const gridcellarray = [];

function setupGridControls(containerId, gridContainerId) {
    const controlsContainer = document.getElementById(containerId);

 
    const label = document.createElement("label");
    label.textContent = "How many numbers in the grid? ";


    const input = document.createElement("input");
    input.type = "number";
    input.min = 1; 
    input.value = 95; 

    const button = document.createElement("button");
    button.textContent = "Create";

    button.addEventListener("click", () => {
        const gridSize = parseInt(input.value);
        if (isNaN(gridSize) || gridSize <= 0) {
            alert("Please enter a valid number greater than 0.");
            return;
        }
        createNumberGrid(gridSize, gridContainerId); 
    });

    controlsContainer.appendChild(label);
    controlsContainer.appendChild(input);
    controlsContainer.appendChild(button);
}

function createNumberGrid(gridSize, gridContainerId) {
    const gridContainer = document.getElementById(gridContainerId);
    gridContainer.innerHTML = ""; 

    for (let i = 0; i < gridSize; i++) {
        const cell = document.createElement("div");
        cell.classList.add("gridCell");
        const number = Math.floor(Math.random() * 100); 
        cell.textContent = number;
        gridContainer.appendChild(cell);
        gridcellarray.push(number);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setupGridControls("controlsContainer", "numbergrid");
    createNumberGrid(95, "numbergrid"); 

    const homeButtonDiv = document.querySelector('.homebutton');
    const homeLink = document.createElement('a');
    homeLink.href = '../index.html'; 
    homeLink.textContent = 'Home'; 
    homeButtonDiv.appendChild(homeLink);
});
