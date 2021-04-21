import secureLinks from "./secureLinks.js";
import { setup } from "../setup.js";

export default async function getHeadingFromLink(link, tab) {
  const promise = new Promise(resolve => {
    fetch(secureLinks(link))
      .then(res => res.json())
      .then(data => resolve(data[setup[tab].headingKey]));
  });

  return promise;
}
