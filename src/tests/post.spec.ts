function sum(a: number, b: number) {
  return a + b
}

describe("Teste Inicial", () => {
  it("Deve retornar o resultado da soma", () => {
    expect(sum(7, 2)).toBe(9)
  })
})
