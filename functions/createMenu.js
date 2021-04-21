import menuClick from "./menuClick.js";

export default function createMenu(data) {
  const navBar = document.querySelector("#navBar");
  for (const key in data) {
    const menuItem = document.createElement("div");
    menuItem.id = key;
    menuItem.setAttribute("class", "navItem");
    menuItem.innerHTML = key;
    menuItem.dataset.url = data[key];
    menuItem.addEventListener("click", menuClick);
    navBar.appendChild(menuItem);
  }
}
