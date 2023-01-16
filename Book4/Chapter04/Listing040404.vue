<script setup>
function superHeroDescriptionGenerator(name, superlative, type) {
  return `${name}, the ${superlative} ${type}`;
}
</script>
<template>
  <MythGenerator
    v-bind:mainCharacter="
      superHeroDescriptionGenerator('Superman', 'Greatest', 'Hero')
    "
  />
</template>
