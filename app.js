import { createMenu } from "./functions/createMenu.js";

const swapi = "https://swapi.dev/api/";

fetch(swapi)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    createMenu(data);
  })
  .then(() => {
    document.querySelector(".navItem:first-child").click();
  });
