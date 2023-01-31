<script>
  import { onDestroy } from 'svelte';
  import { myStore } from './store.js';

  let storeValue;

  const unsubscribe = myStore.subscribe((value) => {
    storeValue = value;
  });

  onDestroy(unsubscribe);
</script>

<h1>The current store value is {storeValue}</h1>
