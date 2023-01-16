<script>
  import { fade, scale } from 'svelte/transition';
  let visible = true;
</script>

<button on:click={() => (visible = !visible)}>Toggle</button>

{#if visible}
  <div out:fade in:scale>
    <h1>Transition Test</h1>
    <p>This is a test of the in and out directives.</p>
  </div>
{/if}
