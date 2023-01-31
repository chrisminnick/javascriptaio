<script>
  import { getContext } from 'svelte';
  import { userprefs } from './stores/userprefs.js';
  let { language, theme } = getContext('userprefs');

  function updatePrefs() {
    $userprefs = { language, theme };
  }
</script>

<form on:submit|preventDefault={updatePrefs}>
  <label for="language">Language</label>
  <select id="language" bind:value={language}>
    <option value="en">English</option>
    <option value="es">Spanish</option>
    <option value="fr">French</option>
    <option value="de">German</option>
  </select>
  <label for="theme">Theme</label>
  <select id="theme" bind:value={theme}>
    <option value="light">Light</option>
    <option value="dark">Dark</option>
  </select>
  <button type="submit">Update</button>
</form>
Current Preferences: {$userprefs.language}
{$userprefs.theme}
