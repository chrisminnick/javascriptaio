<script setup>
const props = defineProps(['postalCode']);
</script>
<template>
  <StoreLocator :postalCode="postalCode" />
</template>
