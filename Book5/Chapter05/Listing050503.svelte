<script>
  let count = 0;
  $: square = count * count;
  function increment() {
    count += 1;
    console.log(square);
  }
</script>

<button on:click={increment}>Increment</button>
<p>The square of {count} is {square}</p>
