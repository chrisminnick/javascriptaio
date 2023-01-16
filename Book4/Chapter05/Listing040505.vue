<script setup>
function quitEditing() {
  alert(`Are you sure you want to quit editing?`);
}
</script>

<template>
  <div>
    <textarea @keyup.ctrl.q="quitEditing" />
  </div>
</template>
