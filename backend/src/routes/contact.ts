import { FastifyInstance, FastifyPluginOptions } from 'fastify'
import { PrismaClient } from '@prisma/client'
import { z } from 'zod'

const prisma = new PrismaClient()

// Validation Schema
const contactSubmissionSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  company: z.string().optional(),
  email: z.string().email({ message: 'Invalid email address' }),
  phone: z.string().optional(),
  service: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(1, { message: 'Project details/message is required' }),
})

export async function contactRoutes(
  app: FastifyInstance,
  options: FastifyPluginOptions
) {
  // POST /api/contact
  app.post('/contact', async (request, reply) => {
    // Validate request body
    const validatedData = contactSubmissionSchema.parse(request.body)

    // Save to database
    const submission = await prisma.contactSubmission.create({
      data: {
        name: validatedData.name,
        company: validatedData.company || null,
        email: validatedData.email,
        phone: validatedData.phone || null,
        service: validatedData.service || null,
        budget: validatedData.budget || null,
        message: validatedData.message,
      },
    })

    app.log.info(`Saved contact submission from: ${validatedData.email} (ID: ${submission.id})`)

    return reply.status(201).send({
      success: true,
      message: 'Inquiry submitted successfully',
      id: submission.id,
    })
  })
}
