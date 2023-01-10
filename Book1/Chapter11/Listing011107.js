function doProcessing() {
  var timeout;
  timeout = setTimeout(function () {
    console.log('doing first thing');
    timeout = setTimeout(function () {
      console.log('step 2');
      timeout = setTimeout(function () {
        console.log('step 3');
        setTimeout(function () {
          console.log('last thing!');
        }, 300);
      }, 1000);
    }, 2500);
  }, 3000);
}

doProcessing();
