import { z } from "zod"
import type { Request, Response } from "express"
import { createPost, getAllPosts } from "../services/post-service"

const createPostSchema = z.object({
  title: z.string(),
  content: z.string(),
})

export async function getPostsController(req: Request, res: Response) {
  try {
    const posts = await getAllPosts()

    res.status(200).json(posts)
  } catch (error) {
    res.status(500).json({ error: "Erro ao obter os posts" })
  }
}

export async function getPostController() {}

export async function addPostController(req: Request, res: Response) {
  try {
    const { title, content } = createPostSchema.parse(req.body)
    const newPost = await createPost({ title, content })

    res.status(201).json(newPost)
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar post" })
  }
}

export async function updatePostController() {}

export async function removePostController() {}
