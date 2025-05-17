import express from "express"
import cors from "cors"
import { postRoutes } from "./routes/post-routes"
import { commentRoutes } from "./routes/comment-routes"

export const app = express()

app.use(express.json())
app.use(cors({ origin: "*" }))

app.use(postRoutes)
app.use(commentRoutes)
