import z from "zod"

export const bodyPostSchema = z.object({
  title: z.string(),
  content: z.string(),
})

export const paramsPostSchema = z.object({
  id: z.string(),
})
