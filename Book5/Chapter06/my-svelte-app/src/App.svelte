<script>
  import { setContext } from 'svelte';
  import { userprefs } from './stores/userprefs.js';
  import EditPrefs from './EditPrefs.svelte';
  setContext('userprefs', userprefs);
</script>

<EditPrefs />
