import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [react()],
  build: {
    rollupOptions: {
      // https://rollupjs.org/guide/en/#big-list-of-options

        input: {
          a: 'src/main.ts',
          'b/index': 'src/main.ts'
        },
        output: {
          entryFileNames: 'entry-[name].js'
        }
    }
  }
})
