import { prisma } from "../lib/prisma"
import type {
  GetPostByIdInput,
  CreatePostInput,
  UpdatePostInput,
  DeletePostInput,
} from "../types/post"

export async function getAllPosts() {
  return await prisma.post.findMany({
    include: {
      comments: true,
    },
  })
}

export async function getPostById({ id }: GetPostByIdInput) {
  return await prisma.post.findUnique({
    where: { id },
    include: {
      comments: true,
    },
  })
}

export async function createPost({ title, content }: CreatePostInput) {
  return await prisma.post.create({
    data: { title, content },
  })
}

export async function updatePost({ id, title, content }: UpdatePostInput) {
  return await prisma.post.update({
    where: { id },
    data: { title, content },
  })
}

export async function deletePost({ id }: DeletePostInput) {
  return await prisma.post.delete({
    where: { id },
  })
}
