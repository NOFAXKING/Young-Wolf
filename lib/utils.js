export function getHTMLElementsById(element) {
  return document.getElementById(element);
}

export function getHTMLElementsByClass(element) {
  return document.getElementsByClassName(element);
}

export function getHTMLElementsByTag(element) {
  return document.getElementsByTagName(element);
}

export function getHTMLElementsByQuery(element) {
  return document.querySelector(element);
}

export function getHTMLElementsByQueryAll(element) {
  return document.querySelectorAll(element);
}
