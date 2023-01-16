import { readable } from 'svelte/store';
export const timer = readable(null, function start(set) {
  const interval = setInterval(() => {
    set(new Date().toLocaleTimeString());
  }, 1000);
  return function stop() {
    clearInterval(interval);
  };
});
