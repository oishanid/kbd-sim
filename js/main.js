import {layout} from "./layout.js";
import {buildKeyboard} from "./build.js";
import {setupInput} from "./input.js";

const container = document.getElementById("keyboard");
buildKeyboard(layout, container);
setupInput();