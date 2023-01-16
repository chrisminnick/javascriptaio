<script>
  import { setContext } from 'svelte';
  import ViewPrefs from './ViewPrefs.svelte';
  setContext('userprefs', { language: 'en', theme: 'light' });
</script>

<ViewPrefs />
