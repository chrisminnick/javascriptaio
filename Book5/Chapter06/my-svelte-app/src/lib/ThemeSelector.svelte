<script>
    let themes = ['light','dark'];
    let themeChoice = '';
</script>
<body class = {themeChoice === 'dark'?"dark-mode":""}>
    <label for="theme">Choose a theme:</label>
    <select id="theme" bind:value={themeChoice}>
        <option value="">--Please choose an option--</option>
        {#each themes as theme}
            <option>{theme}</option>
        {/each}
    </select>
</body>
<style>
    body.dark-mode{
        background-color: black;
        color: white;
    }
</style>
