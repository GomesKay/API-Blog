import { Router } from "express"
import {
  addCommentController,
  removeCommentController,
} from "../controllers/comment-controller"

export const commentRoutes = Router()

commentRoutes.post("/posts/:postId/comment", addCommentController)
commentRoutes.delete("/posts/:postId/comment/:id", removeCommentController)
