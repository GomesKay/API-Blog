import type { Request, Response } from "express"
import { createComment, deleteComment } from "../services/comment-service"
import {
  paramsCommentSchema,
  bodyCommentSchema,
  paramsIdCommentSchema,
} from "../schemas/comment-schema"

export async function addCommentController(req: Request, res: Response) {
  try {
    const { postId } = paramsCommentSchema.parse(req.params)
    const { content } = bodyCommentSchema.parse(req.body)

    const newComment = await createComment({ postId, content })

    res.status(201).json(newComment)
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar comentário" })
  }
}

export async function removeCommentController(req: Request, res: Response) {
  try {
    const { id, postId } = paramsIdCommentSchema.parse(req.params)

    await deleteComment({ id, postId })

    res.status(200).send({ message: "Comentário deletado" })
  } catch (error) {
    res.status(500).json({ error: "Erro ao deletar comentário" })
  }
}
