<script>
  import { fade } from 'svelte/transition';
  let visible = true;
</script>

<button on:click={() => (visible = !visible)}> Toggle </button>

{#if visible}
  <div transition:fade={{ duration: 2000, delay: 1000 }}>
    <h1>Transition Test</h1>
    <p>This is a test of the transition directive.</p>
  </div>
{/if}
