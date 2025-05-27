import { prisma } from "../lib/prisma"
import type {
  CreatePostInput,
  DeletePostInput,
  GetPostByIdInput,
  UpdatePostInput,
} from "../types/post"

export async function getAllPosts() {
  return await prisma.post.findMany()
}

export async function getPostById({ id }: GetPostByIdInput) {
  return await prisma.post.findUnique({
    where: { id },
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
