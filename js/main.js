import {layout} from "./layout.js";
import {buildKeyboard} from "./build.js";

const container = document.getElementById("keyboard");
buildKeyboard(layout, container);