<script>
  import { myStore } from './store.js';

  let store;

  myStore.subscribe((value) => {
    store = value;
  });
</script>

<h1>The current store value is {store}</h1>
