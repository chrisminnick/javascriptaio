<script>
  import ErrorMessage from './lib/ErrorMessage.svelte';
  let posts = [];
  let newPost = '';
  let charactersLeft;
  let charactersLeftClass;
  let error = '';

  $: charactersLeft = 34 - newPost.length;

  $: if (charactersLeft < 0) {
    charactersLeftClass = 'error';
  } else {
    charactersLeftClass = '';
    error = '';
  }

  function addPost() {
    if (charactersLeft < 0) {
      error = 'You have exceeded the maximum number of characters.';
    } else {
      posts = [...posts, newPost];
      newPost = '';
    }
  }
</script>

<main>
  <h1>Soliloquy</h1>
  <h2>Social media without the sharing</h2>
  <div>
    <label
      >Talk to yourself:
      <input bind:value={newPost} type="text" />
    </label>
    <span class={charactersLeftClass}>
      {charactersLeft}
    </span>
  </div>
  <div><ErrorMessage message={error} /></div>
  <button on:click={addPost}>Post it!</button>
  <div>
    {#each posts as post}
      <div>{post}</div>
    {/each}
  </div>
</main>

<style>
  div :global(.error) {
    color: red;
  }
</style>
