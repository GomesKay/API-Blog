import { Router } from "express"

export const postRoutes = Router()

postRoutes.get("/posts")
postRoutes.get("/posts/:id")
postRoutes.get("/comments")
postRoutes.post("/posts")
postRoutes.post("/comments")
postRoutes.put("/posts/:id")
postRoutes.delete("/posts/:id")
postRoutes.delete("/comments/:id")
