import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()]
})




// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       '/graphql': {
//         target: 'http://localhost:9000',
//         changeOrigin: true,
//         secure: false
//       }
//     }
//   }
// })