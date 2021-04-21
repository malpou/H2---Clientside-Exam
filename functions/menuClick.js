import { showData } from "./showData.js";

export default function menuClick(e) {
  if (document.querySelector(".active")) {
    document.querySelector(".active").classList.remove("active");
  }
  e.target.classList.add("active");
  fetch(e.target.dataset.url)
    .then(res => res.json())
    .then(data => {
      showData(data);
    });
}
