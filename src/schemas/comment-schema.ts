import z from "zod"

export const paramsCommentSchema = z.object({
  postId: z.string(),
})

export const paramsIdCommentSchema = z.object({
  id: z.string(),
  postId: z.string(),
})

export const bodyCommentSchema = z.object({
  content: z.string(),
})
