import { prisma } from "../lib/prisma"

type CreateCommentInput = {
  postId: string
  content: string
}

type DeleteCommentInput = {
  id: string
  postId: string
}

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
