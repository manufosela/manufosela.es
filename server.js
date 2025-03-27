// server.js
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import { createProxyMiddleware } from 'http-proxy-middleware'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = 4000
const ASTRO_PORT = 4321

// Sirve directamente los archivos estáticos del panel de administración desde la carpeta src/admin
app.use('/admin', express.static(path.join(__dirname, 'src/admin')))

// Configura el proxy para redirigir solo las rutas que no sean /admin hacia el servidor de Astro
app.use((req, res, next) => {
  if (req.path.startsWith('/admin')) {
    // Deja que Express maneje las solicitudes a /admin sin proxy
    next()
  } else {
    // Redirige otras rutas al servidor de Astro
    createProxyMiddleware({
      target: `http://localhost:${ASTRO_PORT}`,
      changeOrigin: true,
      logLevel: 'debug' // Agrega registros para diagnóstico
    })(req, res, next)
  }
})

// Inicia el servidor de Express en el puerto 4000
app.listen(PORT, () => {
  console.log(`Servidor de admin corriendo en http://localhost:${PORT}/admin`)
  console.log(`Las demás rutas se proxyan hacia Astro en http://localhost:${ASTRO_PORT}`)
})
