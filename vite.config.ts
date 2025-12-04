import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Carga las variables de entorno basadas en el modo (desarrollo/producción)
  // El tercer argumento '' le dice a Vite que cargue todas las variables, no solo las que empiezan con VITE_
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    define: {
      // Esto inyecta process.env.API_KEY en tu código del navegador
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    }
  }
})