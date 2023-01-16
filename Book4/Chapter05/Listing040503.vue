<script setup>
function submitData(event) {
  event.preventDefault();
  console.log(event.target.firstName.value);
}
</script>

<template>
  <div>
    <form @submit="submitData">
      <input id="firstName" />
      <input id="lastName" />
      <input type="submit" value="Submit form" />
    </form>
  </div>
</template>
