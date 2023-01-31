<script>
  let posts = ['first post!', 'note to self', 'test'];
</script>

<main>
  <h1>Soliloquy</h1>
  <h2>Social media without the sharing</h2>
  <label>Talk to yourself: <input type="text" /></label>
  <button>Post it!</button>
  <div>
    {#each posts as post}
      <div>{post}</div>
    {/each}
  </div>
</main>

<style>
</style>
