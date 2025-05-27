import { prisma } from "../lib/prisma"

type CreateCommentInput = {
  postId: string
  content: string
}

export async function createComment({ postId, content }: CreateCommentInput) {
  return await prisma.comment.create({
    data: { postId, content },
  })
}

export async function deleteComment() {}
