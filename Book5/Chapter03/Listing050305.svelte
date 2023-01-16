<script>
  let frameworks = [
    {
      name: 'React',
      description: 'A JavaScript library for building user interfaces.',
      url: 'https://reactjs.org/',
    },
    {
      name: 'Vue',
      description: 'The Progressive JavaScript Framework.',
      url: 'https://vuejs.org/',
    },
    {
      name: 'Svelte',
      description: 'Cybernetically enhanced web apps.',
      url: 'https://svelte.dev/',
    },
  ];
</script>

<h1>My ever-growing resume</h1>
<h2>JavaScript frameworks I know</h2>
{#each frameworks as framework}
  <div>
    <h3><a href={framework.url}>{framework.name}</a></h3>
    <p>{framework.description}</p>
  </div>
{/each}
