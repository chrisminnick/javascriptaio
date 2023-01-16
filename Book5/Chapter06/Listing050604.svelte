<script>
  import { onDestroy } from 'svelte';
  import { my_store } from './store.js';

  let storeValue;

  const unsubscribe = my_store.subscribe((value) => {
    storeValue = value;
  });

  onDestroy(unsubscribe);
</script>

<h1>The current store value is {storeValue}</h1>
