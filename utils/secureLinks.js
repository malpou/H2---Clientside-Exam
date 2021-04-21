export default function secureLinks(link) {
  return link.includes("https") ? link : link.replace("http", "https");
}
