<script>
  let funActivities = ['swimming', 'hiking', 'skiing', 'biking', 'camping'];
</script>

<label for="funActivities">Choose your favorite activity:</label>
<select id="funActivities" bind:value={funActivities}>
  {#each funActivities as activity}
    <option value={activity}>{activity}</option>
  {/each}
</select>
