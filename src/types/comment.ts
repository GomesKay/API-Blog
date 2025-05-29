import type { Comment } from "../models/comment-model"

export type CreateCommentInput = Pick<Comment, "postId" | "content">

export type DeleteCommentInput = Pick<Comment, "id" | "postId">
