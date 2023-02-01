<script>
  import { onDestroy } from 'svelte';
  import { userprefs } from './stores/userprefs.js';

  let languagePref;
  let themePref;
  let unsubscribe = userprefs.subscribe((value) => {
    languagePref = value.language;
    themePref = value.theme;
  });

  onDestroy(() => {
    unsubscribe();
  });

  function updatePrefs() {
    userprefs.set({ language: languagePref, theme: themePref });
  }
</script>

<form on:submit|preventDefault={updatePrefs}>
  <label for="language">Language</label>
  <select id="language" bind:value={languagePref}>
    <option value="en">English</option>
    <option value="fr">French</option>
    <option value="de">German</option>
  </select>
  <label for="theme">Theme</label>
  <select id="theme" bind:value={themePref}>
    <option value="light">Light</option>
    <option value="dark">Dark</option>
  </select>
  <button type="submit">Update</button>
</form>

Current Preferences: {$userprefs.language}
{$userprefs.theme}
