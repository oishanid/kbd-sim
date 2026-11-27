// Build the keyboard visually

export function buildKeyboard(layout, container) {

    for (const row of layout){
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("row");

        for (const keyData of row){
            if (keyData.code === null) {
                const gapDiv = document.createElement("div");
                gapDiv.classList.add("gap");
                gapDiv.style.setProperty("--span", keyData.span);
                rowDiv.append(gapDiv);
                continue;
            }

            const keyDiv = document.createElement("div");
            keyDiv.classList.add("key");

            keyDiv.style.setProperty("--span", keyData.span); // Set CSS

            keyDiv.dataset.code = keyData.code; // Stores the code of this key as the code variable when made

            const keycapDiv = document.createElement("div");
            keycapDiv.classList.add("keycap");
            keycapDiv.textContent = keyData.label; // set the text shown as the label of the key

            keyDiv.append(keycapDiv);
            rowDiv.append(keyDiv);
        }

        container.append(rowDiv);
    }
}