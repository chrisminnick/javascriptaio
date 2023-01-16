<script>
  import { tick } from 'svelte';
  let count = 0;
  $: square = count * count;
  function increment() {
    count += 1;
    tick().then(() => {
      console.log('square is now', square);
    });
  }
</script>

<button on:click={increment}>Increment</button>
<p>The square of {count} is {square}</p>
