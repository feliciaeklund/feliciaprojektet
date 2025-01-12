    const gridContainer = document.getElementById("numbergrid");
    const addupInput = document.getElementById("addupinput");
    const findButton = document.getElementById("findButton");

    findButton.addEventListener("click", () => {
        const targetSum = parseInt(addupInput.value);
        const allCells = document.querySelectorAll(".gridCell");
        let found = false;

        allCells.forEach(cell => cell.classList.remove("marked")); // Rensa tidigare markeringar

        for (let i = 0; i < allCells.length; i++) {
            const num1 = parseInt(allCells[i].textContent);

            for (let j = i + 1; j < allCells.length; j++) {
                const num2 = parseInt(allCells[j].textContent);

                if (num1 + num2 === targetSum) {
                    allCells[i].classList.add("marked");
                    allCells[j].classList.add("marked");
                    found = true;
                    break;
                }
            }

            if (found) break;
        }
    });
});
