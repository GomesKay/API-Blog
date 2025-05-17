import { Router } from "express"
import {
  addPostController,
  getPostController,
  getPostsController,
  removePostController,
  updatePostController,
} from "../controllers/post-controller"

export const postRoutes = Router()

postRoutes.get("/posts", getPostsController)
postRoutes.get("/posts/:id", getPostController)
postRoutes.post("/posts", addPostController)
postRoutes.put("/posts/:id", updatePostController)
postRoutes.delete("/posts/:id", removePostController)
