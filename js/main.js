import {layout} from "./layout.js";
import {buildKeyboard} from "./build.js";

const container = document.getElementById("keyboard");
const keys = buildKeyboard(layout, container);

console.log(keys);