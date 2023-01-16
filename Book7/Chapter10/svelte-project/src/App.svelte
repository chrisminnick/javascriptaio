<script>
  import ErrorMessage from './lib/ErrorMessage.svelte';
  let posts = [];
  let newPost = ''; // new post text
  let charactersLeft; // number of characters left
  let charactersLeftClass; // class for characters left
  let error = ''; // error message

  // reactive statement to load the posts from the api
  $: getPosts();

  // reactive statement to calculate remaining characters
  $: charactersLeft = 34 - newPost.length;

  // reactive statement to set the class for the remaining characters
  $: if (charactersLeft < 0) {
    charactersLeftClass = 'error';
  } else {
    charactersLeftClass = ''; // clear the class
    error = ''; // clear the error
  }

  // Post the new post to the server at /api/posts
  async function addPost() {
    if (charactersLeft < 0) {
      error = 'You have exceeded the maximum number of characters.';
    } else {
      const response = await fetch('http://localhost:3000/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: newPost }),
      });
      if (response.ok) {
        posts = [...posts, { text: newPost }];
        newPost = '';
      } else {
        error = 'There was a problem adding your post.';
      }
    }
  }

  // Get the posts from the server at /api/posts
  async function getPosts() {
    const response = await fetch('http://localhost:3000/api/posts');
    if (response.ok) {
      let data = await response.json();
      posts = data.posts;
    } else {
      error = 'There was a problem getting the posts.';
    }
  }
</script>

<main>
  <h1>Soliloquy</h1>
  <h2>Anti-social media</h2>
  <!-- note: do we need a better tagline? -->
  <div>
    <label
      >Talk to yourself:
      <input bind:value={newPost} type="text" />
    </label>
    <!-- display characters remaining -->
    <span class={charactersLeftClass}>
      {charactersLeft}
    </span>
  </div>
  <!-- display error message -->
  <div><ErrorMessage message={error} /></div>
  <button on:click={addPost}>Post it!</button>
  <!-- display posts-->
  <div>
    {#each posts as post}
      <div>{post.text}</div>
    {/each}
  </div>
</main>

<style>
  /* Style error messages nested in this component's divs */
  div :global(.error) {
    color: red;
  }
</style>
