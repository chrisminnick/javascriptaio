<script>
    let frameworks = [{id:1,name:'React',description:'A JavaScript library for building user interfaces.'},
                      {id:2,name:'Vue',description:'The Progressive JavaScript Framework.'},
                      {id:3,name:'Svelte',description:'Cybernetically enhanced web apps.'}];
</script>
<h1>My ever-growing resume</h1>
<h2>JavaScript frameworks I know</h2>
{#each frameworks as framework (framework.id)}
    <div>
        <h3>{framework.name}</h3>
        <p>{framework.description}</p>
    </div>
{/each}