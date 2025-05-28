import type { Request, Response } from "express"
import {
  createPost,
  deletePost,
  getAllPosts,
  getPostById,
  updatePost,
} from "../services/post-service"
import { paramsPostSchema, bodyPostSchema } from "../schemas/post-schema"

export async function getPostsController(req: Request, res: Response) {
  try {
    const posts = await getAllPosts()

    res.status(200).json(posts)
  } catch (error) {
    res.status(500).json({ error: "Erro ao obter os posts" })
  }
}

export async function getPostController(req: Request, res: Response) {
  try {
    const { id } = paramsPostSchema.parse(req.params)
    const post = await getPostById({ id })

    if (!post) {
      res.status(404).json({ error: "Post não encontrado" })
      return
    }

    res.status(200).json(post)
  } catch (error) {
    res.status(500).json({ error: "Erro ao obter o post" })
  }
}

export async function addPostController(req: Request, res: Response) {
  try {
    const { title, content } = bodyPostSchema.parse(req.body)
    const newPost = await createPost({ title, content })

    res.status(201).json(newPost)
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar post" })
  }
}

export async function updatePostController(req: Request, res: Response) {
  try {
    const { id } = paramsPostSchema.parse(req.params)
    const { title, content } = bodyPostSchema.parse(req.body)
    const updatedPost = await updatePost({ id, title, content })

    if (!updatedPost) {
      res.status(404).json({ error: "Post não encontrado" })
      return
    }

    res.status(200).json(updatedPost)
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar o post" })
  }
}

export async function removePostController(req: Request, res: Response) {
  try {
    const { id } = paramsPostSchema.parse(req.params)

    await deletePost({ id })

    res.status(200).send({ message: "Post deletado" })
  } catch (error) {
    res.status(500).json({ error: "Erro ao deletar o post" })
  }
}
