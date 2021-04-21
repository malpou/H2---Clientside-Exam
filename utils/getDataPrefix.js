import { dataPrefix } from "../setup.js";

export default function getDataPrefix(key) {
  return !dataPrefix[key] ? key : dataPrefix[key];
}
