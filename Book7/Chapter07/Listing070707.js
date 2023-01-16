async function getData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(`An error has occurred`);
  }
}

async function main() {
  const data = await getData('https://nothinghere/todos/1');
  console.log(data);
}

main();
