<script>
  import { getContext } from 'svelte';
</script>

<p>Your current preferences:</p>
<p>Language: {getContext('userprefs').language}</p>
<p>Theme: {getContext('userprefs').theme}</p>
