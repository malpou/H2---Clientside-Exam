import clearMain from "../utils/clearMain.js";

export function showData(data, arr) {
  clearMain();
  data.results.forEach(elm => {
    const card = document.createElement("div");
    card.className = "card";
    let dataStr = "";
    for (const key in elm) {
      if (!["name", "title", "height", "mass"].includes(key)) {
        continue;
      }
      dataStr += `
                <p>
                <span class="capitalize">${key}</span> ${elm[key]}
                </p>`;
    }
    card.insertAdjacentHTML("beforeend", dataStr);

    document.querySelector("main").appendChild(card);
  });
}
