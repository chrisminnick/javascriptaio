<script>
  export let blogTitle = 'Your title goes here.';
  export let blogBody = 'Your post goes here.';
  export let published = false;
</script>

<article>
  {#if published}
    <h1>{blogTitle}</h1>
    <p>{blogBody}</p>
  {:else}
    <h1>This post is not yet live</h1>
  {/if}
</article>
