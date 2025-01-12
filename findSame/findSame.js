    const gridContainer = document.getElementById("numbergrid");
    const messageElement = document.getElementById("message"); // Använd ID för att identifiera elementet
    const resetButton = document.querySelector(".resetbutton");

    // Kontrollera att elementet hittas
    if (!messageElement) {
        console.error("Message element not found");
        return;
    }

    console.log("Message element found:", messageElement);

    gridContainer.addEventListener("click", (event) => {
        if (event.target.classList.contains("gridCell")) {
            const number = event.target.textContent;
            const allCells = document.querySelectorAll(".gridCell");
            let copiesCount = 0;

            allCells.forEach(cell => {
                if (cell.textContent === number) {
                    cell.classList.add("marked");
                    copiesCount++;
                } else {
                    cell.classList.remove("marked");
                }
            });

            console.log(`Found ${copiesCount} copies of the number ${number}`);
            messageElement.textContent = `${copiesCount} copies of the number ${number}`;
        }
    });

    resetButton.addEventListener("click", () => {
        const allCells = document.querySelectorAll(".gridCell");
        allCells.forEach(cell => {
            cell.classList.remove("marked");
        });

        messageElement.textContent = "Click on a number to find copies";
    });
});

