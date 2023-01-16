<script setup>
const vPlay = {
  mounted: (el) => {
    el.play();
  },
};
</script>
<template>
  <audio controls v-play>
    <source src="https://www.example.com/song.mp3" type="audio/mpeg" />
    Your browser does not support the audio element.
  </audio>
</template>
