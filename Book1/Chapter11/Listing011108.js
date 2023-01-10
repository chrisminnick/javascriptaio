async function doProcessingAsync() {
  await promisifiedSetTimeout(3000);
  console.log('doing first thing');
  await promisifiedSetTimeout(2500);
  console.log('step 2');
  await promisifiedSetTimeout(1000);
  console.log('step 3');
  await promisifiedSetTimeout(300);
  console.log('last thing');
}

doProcessingAsync();
