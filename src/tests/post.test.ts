import { mocked } from "jest-mock"
import * as postService from "../services/post-service"

jest.mock("../services/post-service", () => ({
  createPost: jest.fn(),
  deletePost: jest.fn(),
  getAllPosts: jest.fn(),
  getPostById: jest.fn(),
  updatePost: jest.fn(),
}))

const mockedPostService = mocked(postService, { shallow: false })

describe("Mock - Post", () => {
  const mockPost = {
    id: "1",
    title: "Teste",
    content: "Conteúdo",
    created_at: new Date(),
    updated_at: new Date(),
    comments: [],
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it("Deve ser possível criar um post", async () => {
    mockedPostService.createPost.mockResolvedValueOnce(mockPost)

    const result = await postService.createPost({
      title: "Teste",
      content: "Conteúdo",
    })

    expect(postService.createPost).toHaveBeenCalled()
    expect(result).toEqual(mockPost)
  })

  it("Deve buscar todos os posts", async () => {
    mockedPostService.getAllPosts.mockResolvedValueOnce([mockPost])

    const result = await postService.getAllPosts()

    expect(postService.getAllPosts).toHaveBeenCalled()
    expect(result).toEqual([mockPost])
  })

  it("Deve buscar post por ID", async () => {
    mockedPostService.getPostById.mockResolvedValueOnce(mockPost)

    const result = await postService.getPostById({ id: "1" })

    expect(postService.getPostById).toHaveBeenCalledWith({ id: "1" })
    expect(result).toEqual(mockPost)
  })

  it("Deve retornar null ao buscar post inexistente", async () => {
    mockedPostService.getPostById.mockResolvedValueOnce(null)

    const result = await postService.getPostById({ id: "99" })

    expect(result).toBeNull()
  })

  it("Deve atualizar post", async () => {
    mockedPostService.updatePost.mockResolvedValueOnce(mockPost)

    const result = await postService.updatePost({
      id: "1",
      title: "Teste",
      content: "Conteúdo",
    })

    expect(postService.updatePost).toHaveBeenCalledWith({
      id: "1",
      title: "Teste",
      content: "Conteúdo",
    })
    expect(result).toEqual(mockPost)
  })

  it("Deve deletar post", async () => {
    mockedPostService.deletePost.mockResolvedValueOnce(mockPost)

    const result = await postService.deletePost({ id: "1" })

    expect(postService.deletePost).toHaveBeenCalledWith({ id: "1" })
    expect(result).toEqual(mockPost)
  })
})
