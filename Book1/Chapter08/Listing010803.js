function makeNumberedList() {
  let numberedList = '<ol>';
  for (let i = 0; i < arguments.length; i++) {
    numberedList += `<li>${arguments[i]}</li>`;
  }
  numberedList += '</ol>';
  return numberedList;
}
