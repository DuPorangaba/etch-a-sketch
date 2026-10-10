const newGrid = document.getElementById("newGrid");
const sketch = document.getElementById("sketch");

function creatingDivs(num = 16) {
    sketch.innerHTML = "";
    
    let fragment = document.createDocumentFragment();

    for (let r = 0; r < num; r++) {
        const row = document.createElement("div");
        row.className = "row";

        for (let c = 0; c < num; c++) {
            const pixel = document.createElement("div");
            pixel.className = "pixel";
            row.appendChild(pixel);
        }

        fragment.appendChild(row);
    }

    sketch.appendChild(fragment);
}


newGrid.addEventListener("click", () => {
    const input = prompt("Squares per side (1-100):", 16);
    if (input === null) return; // Cancel pressed

    const newSize = parseInt(input, 10);
    if (Number.isNaN(newSize) || newSize < 1 || newSize > 100) {
        alert("Please enter a whole number between 1 and 100.");
        return;
    }

    creatingDivs(newSize);
});

sketch.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("pixel")) {
        e.target.style.backgroundColor = "black";
    }
});

creatingDivs();