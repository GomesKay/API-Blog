import { Router } from "express"
import {
  addPostController,
  getPostController,
  getPostsController,
  removePostController,
  updatePostController,
} from "../controllers/post-controller"

export const postRoutes = Router()

postRoutes.route("/posts").get(getPostsController).post(addPostController)
postRoutes
  .route("/posts/:id")
  .get(getPostController)
  .put(updatePostController)
  .delete(removePostController)
