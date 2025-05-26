import { prisma } from "../lib/prisma"

type CreatePostInput = {
  title: string
  content: string
}

type getIdPost = {
  id: string
}

type DeletePost = {
  id: string
}

export async function getAllPosts() {
  return await prisma.post.findMany()
}

export async function getPostById({ id }: getIdPost) {
  return await prisma.post.findUnique({
    where: { id },
  })
}

export async function createPost({ title, content }: CreatePostInput) {
  return await prisma.post.create({
    data: { title, content },
  })
}

export async function updatePost() {}

export async function deletePost({ id }: DeletePost) {
  return await prisma.post.delete({
    where: { id },
  })
}
