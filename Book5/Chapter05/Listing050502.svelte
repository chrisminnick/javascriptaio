<script>
  import { beforeUpdate, afterUpdate } from 'svelte';
  let count = 0;
  beforeUpdate(() => {
    console.log(`the count was ${count}`);
  });
  afterUpdate(() => {
    console.log(`the count is now ${count}`);
  });
</script>

<button on:click={() => count++}>Increment</button>
