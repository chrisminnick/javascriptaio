<script setup>
import { ref } from 'vue';

const cupsOfCoffee = ref(0);
function drinkCoffee() {
  cupsOfCoffee.value++;
}
</script>
