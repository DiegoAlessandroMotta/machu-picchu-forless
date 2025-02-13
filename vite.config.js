import react from '@vitejs/plugin-react'
import laravel from 'laravel-vite-plugin'
import { defineConfig, loadEnv } from 'vite'

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  const HOST = env.VITE_SERVER_HOST ?? undefined
  const PORT = parseInt(env.VITE_SERVER_PORT) ?? undefined

  return defineConfig({
    plugins: [
      laravel({
        input: 'resources/js/app.tsx',
        refresh: true
      }),
      react()
    ],
    server: {
      host: HOST,
      port: PORT
    }
  })
}
