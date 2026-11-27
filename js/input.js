export function setupInput() {
    document.addEventListener("keydown", event=> {
        const pressedKey = document.querySelector(`[data-code="${event.code}"]`);
        const keycap = pressedKey.querySelector(".keycap");

        if (!pressedKey) return;
        //for when i add audio
        if (event.repeat) return;

        keycap.classList.add("pressed");

    });

    document.addEventListener("keyup", event=> {
        const upKey = document.querySelector(`[data-code="${event.code}"]`);
        const keycap = upKey.querySelector(".keycap");
        keycap.classList.remove("pressed");
    });
}