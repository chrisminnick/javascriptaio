sendLoginData(
  args,
  function (result) {
    logIn(
      result,
      function (result) {
        loadPage(
          result,
          function () {
            console.log(`result: ${result}`);
          },
          failureCallback
        );
      },
      failureCallback
    );
  },
  failureCallback
);

loginBtn.addEventListener('click', sendLoginData);
