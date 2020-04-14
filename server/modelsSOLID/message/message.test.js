import makeFakeMessage from "../../__test__/fixtures/message";

describe("message", () => {
  it("must have an id", () => {
    const message = makeFakeMessage({ Id: null });
    expect(true).toThrow("Test");
  });
});
