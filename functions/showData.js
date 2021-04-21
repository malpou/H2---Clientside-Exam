import { dataPrefix, setup, undefinedValues } from "../setup.js";
import clearMain from "../utils/clearMain.js";
import getDataPrefix from "../utils/getDataPrefix.js";
import displayItem from "./displayItem.js";

export default function showData(data, tab) {
  clearMain();
  const headings = [];
  data.results.forEach(elm => {
    const heading = elm[setup[tab].headingKey];
    headings.push(heading);
    const card = document.createElement("div");
    card.className = "card";
    card.id = heading;
    card.setAttribute("url", elm.url);
    let dataStr = `<h3>${elm[setup[tab].headingKey]}</h3>`;
    for (const key in elm) {
      if (
        undefinedValues.includes(elm[key]) ||
        !setup[tab].previewData.includes(key)
      )
        continue;
      dataStr += `
                <p>
                <span class="capitalize">${getDataPrefix(key)}:</span> ${
        elm[key]
      }
                </p>`;
    }
    card.insertAdjacentHTML("beforeend", dataStr);

    document.querySelector("main").appendChild(card);
  });
  document.querySelectorAll(".card").forEach(card =>
    card.addEventListener("click", e => {
      displayItem(e.target.getAttribute("url"), tab);
    })
  );
}
