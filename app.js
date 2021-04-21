import { createMenu } from "./functions/createMenu.js";
import secureLinks from "../utils/secureLinks.js";

const swapi = "https://swapi.dev/api/";

fetch(secureLinks(swapi))
  .then(res => res.json())
  .then(data => createMenu(data))
  .then(() => {
    document.querySelector(".navItem:first-child").click();
  });
