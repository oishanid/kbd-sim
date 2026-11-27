function key(code, label, span = 4) {
    return { code: code, label: label, span: span};
}

function gap(span) {
    return { code: null, label:"", span: span};
}

//Keyboard Layout (array (keyboard) of arrays (rows) with keys)

export const layout = [
    // Row 0 Array
    [
        key("Escape", "Esc"),
        gap(2),
        key("F1", "F1"),
        key("F2", "F2"),
        key("F3", "F3"),
        key("F4", "F4"),
        gap(2),
        key("F5", "F5"),
        key("F6", "F6"),
        key("F7", "F7"),
        key("F8", "F8"),
        gap(1),
        key("F9", "F9"),
        key("F10", "F10"),
        key("F11", "F11"),
        key("F12", "F12"),
        gap(8),
    ],
    // Row 1 Array
    [
        key("Backquote", "`"),
        //I'll fix the number & symbol keys later
        key("Digit1", "1"), // !
        key("Digit2", "2"), // @
        key("Digit3", "3"), // #
        key("Digit4", "4"), // $
        key("Digit5", "5"), // %
        key("Digit6", "6"), // ^
        key("Digit7", "7"), // &
        key("Digit8", "8"), // *
        key("Digit9", "9"), // ()
        key("Digit0", "0"), // )
        key("Minus", "-"), // _
        key("Equal", "="), // +
        key("Backspace", "BACKSPACE", 8),

        key("Delete", "DEL"),
    ],
    // Row 2 Array
    [
        key("Tab", "TAB", 6),
        key("KeyQ", "Q"),
        key("KeyW", "W"),
        key("KeyE", "E"),
        key("KeyR", "R"),
        key("KeyT", "T"),
        key("KeyY", "Y"),
        key("KeyU", "U"),
        key("KeyI", "I"),
        key("KeyO", "O"),
        key("KeyP", "P"),
        key("BracketLeft", "["), // {}
        key("BracketRight", "]"), // }
        key("Backslash", "\\", 6), // |

        key("End", "END"),
    ],
    // Row 3 Array
    [
        key("CapsLock", "CAPSLOCK", 7),
        key("KeyA", "A"),
        key("KeyS", "S"),
        key("KeyD", "D"),
        key("KeyF", "F"),
        key("KeyG", "G"),
        key("KeyH", "H"),
        key("KeyJ", "J"),
        key("KeyK", "K"),
        key("KeyL", "L"),
        key("Semicolon", ";"), // :
        key("Quote", "'"), // "
        key("Enter", "ENTER", 9),

        key("PageUp", "PGUP"),
    ],
    // Row 4 Array
    [
        key("ShiftLeft", "SHIFT", 9),
        key("KeyZ", "Z"),
        key("KeyX", "X"),
        key("KeyC", "C"),
        key("KeyV", "V"),
        key("KeyB", "B"),
        key("KeyN", "N"),
        key("KeyM", "M"),
        key("Comma", ","), // <
        key("Period", "."), // >
        key("Slash", "/"), // ?
        key("ShiftRight", "SHIFT", 7),
        key("ArrowUp", "▲"),
        key("PageDown", "PGDN"),
    ],
    // Row 5 Array
    [
        key("ControlLeft", "CTRL", 5),
        key("MetaLeft", "WIN", 5), // or like windows symbol
        key("AltLeft", "ALT", 5),
        key("Space", "", 25),
        key("AltRight", "ALT"),
        key("Function", "FN"),
        key("ControlRight", "CTRL"),
        key("ArrowLeft", "◀"),
        key("ArrowDown", "▼"),
        key("ArrowRight", "▶"),
    ]
];