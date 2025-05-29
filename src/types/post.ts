import type { Post } from "../models/post-model"

export type GetPostByIdInput = Pick<Post, "id">

export type CreatePostInput = Pick<Post, "title" | "content">

export type UpdatePostInput = Omit<Post, "created_at" | "updated_at">

export type DeletePostInput = Pick<Post, "id">
