import { z } from 'zod'

export const trackerDetailsFormSchema = z.object({
  header: z.string().min(1, { message: 'Header is required' }),
  type: z
    .string({ required_error: 'Type is required' })
    .min(1, { message: 'Type is required' }),
  status: z
    .string({ required_error: 'Status is required' })
    .min(1, { message: 'Status is required' }),
  target: z
    .number()
    .int({ message: 'Target must be an integer' })
    .positive({ message: 'Target must be a positive number' })
    .gte(1, { message: 'Target must be greater than or equal to 1' })
    .lte(100, { message: 'Target must be less than or equal to 100' }),
  limit: z
    .number()
    .int({ message: 'Limit must be an integer' })
    .positive({ message: 'Limit must be a positive number' })
    .gte(1, { message: 'Limit must be greater than or equal to 1' })
    .lte(50, { message: 'Limit must be less than or equal to 50' }),
  reviewer: z
    .string({ required_error: 'Reviewer is required' })
    .min(1, { message: 'Reviewer is required' }),
})

export type TrackerDetailsFormSchema = z.infer<typeof trackerDetailsFormSchema>
