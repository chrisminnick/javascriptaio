<script setup>
  import MyButton from './MyButton.svelte';
  let message = '';
  let buttonArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  function handleClick(e) {
    message = `You clicked the ${e.target.value} button`;
  }
</script>

{#each buttonArray as button}
  <MyButton value={button} on:click={handleClick} />
{/each}
<p>{message}</p>
