<script>
  import { getContext, setContext } from 'svelte';
  const { language, theme } = getContext('userprefs');
  function updateContext() {
    setContext('userprefs', {
      language: document.getElementById('language').value,
      theme: document.getElementById('theme').value,
    });
  }
</script>

<label for="language">Language</label>
<select id="language" value={language}>
  <option value="en">English</option>
  <option value="es">Spanish</option>
  <option value="fr">French</option>
  <option value="de">German</option>
</select>
<label for="theme">Theme</label>
<select id="theme" value={theme}>
  <option value="light">Light</option>
  <option value="dark">Dark</option>
</select>
<button on:click={() => updateContext()}>Update</button>
{language}
{theme}
