    const gridContainer = document.getElementById("numbergrid");
    const fillClearedButton = document.getElementById("fillClearedButton");
    // När knappen "Fill Cleared" klickas
    fillClearedButton.addEventListener("click", () => {
        const clearedCells = document.querySelectorAll(".gridCell.cleared");
        clearedCells.forEach(cell => {
            cell.style.backgroundColor = "lightgray";
            cell.classList.remove("cleared");
            cell.textContent = Math.floor(Math.random() * 100); // Återställ numren
        });
    });
});
