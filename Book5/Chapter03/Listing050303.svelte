<script>
  let frameworks = ['React', 'Vue', 'Svelte'];
  let frameworkChoice = '';
</script>

<label for="framework">Choose a framework:</label>
<select id="framework" bind:value={frameworkChoice}>
  <option value="">--Please choose an option--</option>
  {#each frameworks as framework}
    <option>{framework}</option>
  {/each}
</select>
{#if frameworkChoice === 'Svelte'}
  <p>That's a fine choice.</p>
{:else if frameworkChoice === 'React'}
  <p>That's a splendid choice.</p>
{:else if frameworkChoice === 'Vue'}
  <p>That's a great choice.</p>
{:else}
  <p>Please choose a framework.</p>
{/if}
