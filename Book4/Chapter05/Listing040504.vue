<script setup>
function submitData(event, thankYouMessage) {
  event.preventDefault();
  console.log(`${thankYouMessage} ${event.target.firstName.value}`);
}
</script>

<template>
  <div>
    <form @submit="(event) => submitData(event, 'Thanks')">
      <input id="firstName" />
      <input id="lastName" />
      <input type="submit" value="Submit form" />
    </form>
  </div>
</template>
