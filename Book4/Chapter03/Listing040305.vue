<script>
import { ref } from 'vue';

export default {
  setup() {
    const text = ref('');
    return {
      text,
    };
  },

  directives: {
    focus: {
      mounted(el) {
        el.focus();
      },
    },
    chars: {
      updated(el) {
        console.log(el.value.length);
      },
    },
  },
};
</script>
<template>
  <div>
    <p>
      Start typing and open the console to see how many characters you've typed!
    </p>
    <textarea v-focus v-chars v-model="text"></textarea>
  </div>
</template>
