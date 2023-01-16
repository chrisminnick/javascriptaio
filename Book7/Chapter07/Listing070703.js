async function getData(url) {
  return await fetch(url);
}

async function main() {
  try {
    const response = await getData('https://nothinghere');
  } catch (error) {
    console.log(`An error has occurred`);
  }
}

main();
