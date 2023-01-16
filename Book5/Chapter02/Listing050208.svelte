<script>
  let posts = [];
  let newPost = '';
  let charactersLeft;
  let charactersLeftStyle;
  let error = '';

  $: charactersLeft = 34 - newPost.length;

  $: if (charactersLeft < 0) {
    charactersLeftStyle = 'color: red';
  } else {
    charactersLeftStyle = 'color: black';
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
  <label
    >Talk to yourself:
    <input bind:value={newPost} type="text" />
  </label>
  <span style={charactersLeftStyle}>
    {charactersLeft}
  </span>
  <p>{error}</p>
  <button on:click={addPost}>Post it!</button>
  <div>
    {#each posts as post}
      <div>{post}</div>
    {/each}
  </div>
</main>
