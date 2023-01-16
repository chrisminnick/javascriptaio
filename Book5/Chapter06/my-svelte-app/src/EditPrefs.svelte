<script>
  import { getContext } from 'svelte';
  const userprefs = getContext('userprefs');
</script>

<label for="language">Language</label>
<select id="language" bind:value={$userprefs.language}>
  <option value="en">English</option>
  <option value="es">Spanish</option>
  <option value="fr">French</option>
  <option value="de">German</option>
</select>
<label for="theme">Theme</label>
<select id="theme" bind:value={$userprefs.theme}>
  <option value="light">Light</option>
  <option value="dark">Dark</option>
</select>

{$userprefs.language}
{$userprefs.theme}
