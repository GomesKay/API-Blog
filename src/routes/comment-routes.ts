import { Router } from "express"
import {
  addCommentController,
  getCommentsController,
  removeCommentController,
} from "../controllers/comment-controller"

export const commentRoutes = Router()

commentRoutes.get("/comments", getCommentsController)
commentRoutes.post("/comments", addCommentController)
commentRoutes.delete("/comments/:id", removeCommentController)
