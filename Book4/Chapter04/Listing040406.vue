<script>
import { reactive } from 'vue';
export default {
  setup() {
    const state = reactive({ cupsOfCoffee: 0 });
    return {
      state,
    };
  },
};
</script>
