
    resetButton.addEventListener("click", () => {
        const allCells = document.querySelectorAll(".gridCell");
        allCells.forEach(cell => {
            cell.classList.remove("marked");
        });

        messageElement.textContent = "Click on a number to find copies";
    });
});

