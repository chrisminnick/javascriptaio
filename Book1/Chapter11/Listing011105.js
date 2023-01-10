doLogin()
  .then((result) => sendLoginData(result))
  .then((result1) => logIn(result1))
  .then((result2) => loadPage(result2))
  .then((result3) => {
    console.log(`final result: ${result3}`);
  })
  .catch(failureCallback);
