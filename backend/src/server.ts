import { buildApp } from './app.js'
import dotenv from 'dotenv'

dotenv.config()

const app = buildApp()

const PORT = parseInt(process.env.PORT || '3001', 10)
const HOST = process.env.HOST || '0.0.0.0'

async function start() {
  try {
    await app.listen({ port: PORT, host: HOST })
    console.log(`[Vista Server] running on http://${HOST}:${PORT}`)
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

// Graceful Shutdown
const signals = ['SIGINT', 'SIGTERM']
for (const signal of signals) {
  process.on(signal, async () => {
    app.log.info(`Received ${signal}, closing server...`)
    await app.close()
    process.exit(0)
  })
}

start()
