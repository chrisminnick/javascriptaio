<script>
  import { my_store } from './store.js';

  let store;

  my_store.subscribe((value) => {
    store = value;
  });
</script>

<h1>The current store value is {store}</h1>
