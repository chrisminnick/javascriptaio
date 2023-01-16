export default defineConfig({
  plugins: [vue({ reactivityTransform: true })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
