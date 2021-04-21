import { setup, dataPrefix, undefinedValues } from "../setup.js";
import clearMain from "../utils/clearMain.js";

export function showData(data, tab) {
  clearMain();
  data.results.forEach(elm => {
    const card = document.createElement("div");
    card.className = "card";
    let dataStr = `<h3>${elm[setup[tab].headingKey]}</h3>`;
    for (const key in elm) {
      if (
        undefinedValues.includes(elm[key]) ||
        !setup[tab].previewData.includes(key)
      )
        continue;
      dataStr += `
                <p>
                <span class="capitalize">${
                  !dataPrefix[key] ? key : dataPrefix[key]
                }:</span> ${elm[key]}
                </p>`;
    }
    card.insertAdjacentHTML("beforeend", dataStr);

    document.querySelector("main").appendChild(card);
  });
}
