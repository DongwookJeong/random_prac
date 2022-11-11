export default function elementMk(tagName, obj) {
  let element = [];
  let temp = `<${tagName}>${obj}</${tagName}`;
  element.push(temp);
  return element.join("");
}
