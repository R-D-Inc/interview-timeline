import { z, ZodSchema } from 'zod'

export const isTypeOf =
  <S extends ZodSchema>(schema: S): ((value: unknown) => value is z.infer<typeof schema>) =>
  (value: unknown): value is z.infer<typeof schema> => {
    const parsedData = schema.safeParse(value)
    if (parsedData.success) return true
    console.error(parsedData.error)
    return false
  }
