import z from "zod"

export const bodySchema = z.object({
  title: z.string(),
  content: z.string(),
})

export const paramsSchema = z.object({
  id: z.string(),
})
