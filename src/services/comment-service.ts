import { prisma } from "../lib/prisma"
import type { CreateCommentInput, DeleteCommentInput } from "../types/comment"

export async function createComment({ postId, content }: CreateCommentInput) {
  return await prisma.comment.create({
    data: { postId, content },
  })
}

export async function deleteComment({ id, postId }: DeleteCommentInput) {
  return await prisma.comment.delete({
    where: { id, postId },
  })
}
