function makeUnorderedList(array) {
  let listItems = array.map(function (element) {
    return `<li>${element}</li>`;
  });
  return `<ul>${listItems.join('')}</ul>`;
}
