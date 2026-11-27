// Function to make a keyboard key. (code, label, span) are like the fields for each key
// Code is a key's "name/code", label is what actually shows on the screen, span is size
// Span is 4 by default
function key(code, label, span = 4) {
    return { code: code, label: label, span: span};
}

//Keyboard Layout (array of arrays)
//Using 

export const layout = [
    // Row 0 Array
    [
        key("Escape", "Esc"),
        // Gap span 8
        key("F1", "F1"),
        key("F2", "F2"),
        key("F3", "F3"),
        key("F4", "F4"),
        key("F5", "F5"),
        key("F6", "F6"),
        key("F7", "F7"),
        key("F8", "F8"),
        // Smaller Gap span 4
        key("F9", "F9"),
        key("F10", "F10"),
        key("F11", "F11"),
        key("F12", "F12"),
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
        key("Equals", "="), // +
        key("Backspace", "BACKSPACE"),

        key("Delete", "DEL"),
    ],
    // Row 2 Array
    [
        key("Tab", "TAB"),
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
        key("LeftBracket", "["), // {}
        key("RightBracket", "]"), // }
        key("Backslash", "\\"), // |

        key("End", "END"),
    ],
    // Row 3 Array
    [
        key("Caps", "CAPSLOCK"),
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
        key("Apostrophe", "'"), // "
        key("Enter", "ENTER"),

        key("PageUp", "PGUP"),
    ],
    // Row 4 Array
    [
        key("Shift", "SHIFT"),
        key("KeyZ", "Z"),
        key("KeyX", "X"),
        key("KeyC", "C"),
        key("KeyV", "V"),
        key("KeyB", "B"),
        key("KeyN", "N"),
        key("KeyM", "M"),
        key("LessThan", "<"),
        key("GreaterThan", ">"),
        key("Slash", "/"), // ?
        key("Shift", "SHIFT"),
        //up arrow key, kind of different
        key("PageDown", "PGDN"),
    ],
    // Row 5 Array
    [
        key("Control", "CTRL"),
        key("Windows", "WIN"), // or like windows symbol
        key("Alt", "ALT"),
        key("Spacebar", ""),
        key("Alt", "ALT"),
        key("Function", "FN"),
        key("Control", "CTRL"),
        // arrow keys
    ]
];