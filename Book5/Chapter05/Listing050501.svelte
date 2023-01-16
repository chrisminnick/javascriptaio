<script>
  import { onMount } from 'svelte';
  onMount(() => {
    let timer = setInterval(() => {
      let now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      let seconds = now.getSeconds();
      let ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12;
      hours = hours < 10 ? '0' + hours : hours;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;
      let time = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
      document.getElementById('time').innerHTML = time;
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  });
</script>

<div id="time" />
