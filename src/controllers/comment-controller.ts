import type { Request, Response } from "express"
import { z } from "zod"
import { createComment } from "../services/comment-service"

const paramsSchema = z.object({
  postId: z.string(),
})

const bodySchema = z.object({
  content: z.string(),
})

export async function addCommentController(req: Request, res: Response) {
  try {
    const { postId } = paramsSchema.parse(req.params)
    const { content } = bodySchema.parse(req.body)

    const newComment = await createComment({ postId, content })

    res.status(201).json(newComment)
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar comentário" })
  }
}

export async function removeCommentController() {}
