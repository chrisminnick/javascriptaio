<script>
  let funActivities = ['swimming', 'hiking', 'skiing', 'biking', 'camping'];
  let favoriteActivity = 'nothing';
</script>

<label for="funActivities">Choose your favorite activity:</label>
<select id="funActivities" bind:value={favoriteActivity}>
  {#each funActivities as activity}
    <option value={activity}>{activity}</option>
  {/each}
</select>
<p>Your favorite activity is {favoriteActivity}.</p>
