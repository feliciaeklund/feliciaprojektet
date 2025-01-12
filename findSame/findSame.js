    const gridContainer = document.getElementById("numbergrid");
    const messageElement = document.getElementById("message"); // Använd ID för att identifiera elementet
    const resetButton = document.querySelector(".resetbutton");

    resetButton.addEventListener("click", () => {
        const allCells = document.querySelectorAll(".gridCell");
        allCells.forEach(cell => {
            cell.classList.remove("marked");
        });

        messageElement.textContent = "Click on a number to find copies";
    });
});

