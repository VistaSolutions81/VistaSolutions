import fastify from 'fastify'
import cors from '@fastify/cors'
import { contactRoutes } from './routes/contact.js'
import { ZodError } from 'zod'

export function buildApp() {
  const app = fastify({
    logger: true,
  })

  // Configure CORS
  app.register(cors, {
    origin: true, // Allow all origins for API calls
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  })

  // Register routes
  app.register(contactRoutes, { prefix: '/api' })

  // Global Error Handler
  app.setErrorHandler((error, request, reply) => {
    app.log.error(error)

    if (error instanceof ZodError) {
      return reply.status(400).send({
        success: false,
        message: 'Validation error',
        errors: error.errors.map((err) => ({
          field: err.path.join('.'),
          message: err.message,
        })),
      })
    }

    // Default Error response
    reply.status(error.statusCode || 500).send({
      success: false,
      message: process.env.NODE_ENV === 'production' 
        ? 'Internal Server Error' 
        : error.message,
    })
  })

  return app
}
