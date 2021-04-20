import { randomNumber } from "./utils/randomNumber.js";

const numberNode = document.getElementById("number");

numberNode.innerHTML = randomNumber(0, 10);
