const swapi = "https://swapi.dev/api/";

fetch(swapi)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    createMenu(data);
  })
  .then(() => {
    // simuler museklik på 1. knap
    document.querySelector(".navItem:first-child").click();
  });

function createMenu(data) {
  // console.log(data);
  navBar = document.querySelector("#navBar");
  for (const key in data) {
    let menuItem = document.createElement("div");
    menuItem.setAttribute("class", "navItem");
    menuItem.innerHTML = key;
    menuItem.dataset.url = data[key];
    menuItem.addEventListener("click", menuClick);
    navBar.appendChild(menuItem);
  }
}

function menuClick(e) {
  if (document.querySelector(".active")) {
    document.querySelector(".active").classList.remove("active");
  }
  e.target.classList.add("active");
  // alert(e.target.dataset.url);
  fetch(e.target.dataset.url)
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      showData(data);
    });
}

function showData(data, arr) {
  document.querySelector("main").innerHTML = "";
  let card;
  data.results.forEach(function (elm) {
    card = document.createElement("div");
    card.className = "card";
    // console.log(elm);
    let dataStr = "";
    for (let key in elm) {
      if (!["name", "title", "height", "mass"].includes(key)) {
        continue;
      }
      // console.log(elm[key]);
      dataStr += `
                <p>
                <span class="capitalize">${key}</span> ${elm[key]}
                </p>`;
    }
    card.insertAdjacentHTML("beforeend", dataStr);

    document.querySelector("main").appendChild(card);
  });
}
