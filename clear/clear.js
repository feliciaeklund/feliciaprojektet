document.addEventListener("DOMContentLoaded", () => {
    const gridContainer = document.getElementById("numbergrid");
    const fillClearedButton = document.getElementById("fillClearedButton");

    gridContainer.addEventListener("mouseover", (event) => {
        if (event.target.classList.contains("gridCell")) {
            if (event.target.classList.contains("cleared")) {
                event.target.style.backgroundColor = "orange";
            } else {
                event.target.style.backgroundColor = "lightblue";
            }
        }
    });

    gridContainer.addEventListener("mouseout", (event) => {
        if (event.target.classList.contains("gridCell")) {
            if (event.target.classList.contains("cleared")) {
                event.target.style.backgroundColor = "red";
            } else {
                event.target.style.backgroundColor = "lightgray";
            }
        }
    });

    gridContainer.addEventListener("click", (event) => {
        if (event.target.classList.contains("gridCell")) {
            event.target.textContent = ""; 
            event.target.style.backgroundColor = "orange";
            event.target.classList.add("cleared");
        }
    });

    fillClearedButton.addEventListener("click", () => {
        const clearedCells = document.querySelectorAll(".gridCell.cleared");
        clearedCells.forEach(cell => {
            cell.style.backgroundColor = "lightgray";
            cell.classList.remove("cleared");
            cell.textContent = Math.floor(Math.random() * 100); 
        });
    });
});
