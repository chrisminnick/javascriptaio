<script>
  let posts = [];
  let newPost = '';

  function addPost() {
    //posts = [...posts,newPost];
    posts.push(newPost);
    console.log(posts);
  }
</script>

<main>
  <h1>Soliloquy</h1>
  <h2>Social media without the sharing</h2>
  <label>Talk to yourself: <input bind:value={newPost} type="text" /></label>
  <button on:click={addPost}>Post it!</button>
  <div>
    {#each posts as post}
      <div>{post}</div>
    {/each}
  </div>
</main>
