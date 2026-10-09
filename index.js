function creatingDivs() {
    let container = document.getElementById("container");
    let fragment = document.createDocumentFragment();

    for (let i = 0; i < 256; i++) {
        const newDiv = document.createElement("div");
        newDiv.className = `pixel item-${i}`;

        fragment.appendChild(newDiv);
    }

    container.appendChild(fragment);
}

creatingDivs();