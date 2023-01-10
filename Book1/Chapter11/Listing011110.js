async function fetchTheData(url) {
  try {
    const response = await fetch(url);
    if (response.status >= 200 && response.status <= 299) {
      return response.json();
    } else {
      throw Error(response.statusText);
    }
  } catch (error) {
    console.log(error);
  }
}
