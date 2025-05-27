export type CreatePostInput = {
  title: string
  content: string
}

export type GetPostByIdInput = {
  id: string
}

export type UpdatePostInput = {
  id: string
  title: string
  content: string
}

export type DeletePostInput = {
  id: string
}
