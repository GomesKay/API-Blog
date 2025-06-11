import { mocked } from "jest-mock"
import * as commentService from "../../src/services/comment-service"

jest.mock("../../src/services/comment-service", () => ({
  createComment: jest.fn(),
  deleteComment: jest.fn(),
}))

const mockedCommentService = mocked(commentService, { shallow: false })

describe("Mock - Comment", () => {
  const mockComment = {
    id: "1",
    content: "Conteúdo do comentário",
    created_at: new Date(),
    updated_at: new Date(),
    postId: "11",
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it("Deve criar um comentário", async () => {
    mockedCommentService.createComment.mockResolvedValueOnce(mockComment)

    const result = await commentService.createComment({
      postId: "11",
      content: "Conteúdo do comentário",
    })

    expect(commentService.createComment).toHaveBeenCalledWith({
      postId: "11",
      content: "Conteúdo do comentário",
    })
    expect(result).toEqual(mockComment)
  })

  it("Deve deletar um comentário", async () => {
    mockedCommentService.deleteComment.mockResolvedValueOnce(mockComment)

    const result = await commentService.deleteComment({ id: "1", postId: "11" })

    expect(commentService.deleteComment).toHaveBeenCalledWith({
      id: "1",
      postId: "11",
    })
    expect(result).toEqual(mockComment)
  })
})
