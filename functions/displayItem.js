import clearMain from "../utils/clearMain.js";
import getDataPrefix from "../utils/getDataPrefix.js";
import getSection from "../utils/getSection.js";
import secureLinks from "../utils/secureLinks.js";
import { setup, undefinedValues } from "/setup.js";

export default function displayItem(link, tab) {
  clearMain();

  if (document.querySelector(".active")) {
    document.querySelector(".active").classList.remove("active");
    document.getElementById(tab).classList.add("active");
  }

  fetch(secureLinks(link))
    .then(res => res.json())
    .then(data => {
      const card = document.createElement("div");
      let dataStr = `<h2>${data[setup[tab].headingKey]}</h2>`;

      setup[tab].fullData.forEach(dataKey => {
        const value = data[dataKey];
        if (Array.isArray(value)) {
          if (value.length > 0) {
            dataStr += `
            <p>
						  <span class="capitalize">${getDataPrefix(dataKey)}:</span>
              <ul>
                ${value
                  .map(item => `<li class="link" url=${item}>${item}</li>`)
                  .join("")}
              </ul>
            </p>
            `;
          }
        } else if (
          !undefinedValues.includes(value) &&
          value !== undefined &&
          value !== null
        ) {
          console.log(value);
          dataStr += `
					<p>
						<span class="capitalize">${getDataPrefix(dataKey)}: </span>${
            value.toString().startsWith("http")
              ? `<span class="link" url=${value}>${value}</span>`
              : value
          }
					</p>
				`;
        }
      });
      card.insertAdjacentHTML("beforeend", dataStr);
      document.querySelector("main").appendChild(card);

      document.querySelectorAll(".link").forEach(link => {
        link.addEventListener("click", e => {
          const link = e.target.getAttribute("url");
          displayItem(link, getSection(link));
        });
      });
    });
}

//${value
//   .map(async item => {
//     const text = await getHeadingFromLink(item, tab);
//     return `<li class="link" url=${item}>${text}</li>`;
//   })
//   .join("")}
