import { prisma } from "../lib/prisma"

type CreatePostInput = {
  title: string
  content: string
}

export async function getAllPosts() {
  return await prisma.post.findMany()
}

export async function getPostById() {}

export async function createPost({ title, content }: CreatePostInput) {
  return await prisma.post.create({
    data: { title, content },
  })
}

export async function updatePost() {}

export async function deletePost() {}
