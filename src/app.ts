import express from "express"
import cors from "cors"
import { postRoutes } from "./routes/routes"

export const app = express()

app.use(
  cors({
    origin: "*",
  })
)
app.use(express.json())
app.use(postRoutes)
