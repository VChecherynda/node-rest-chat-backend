import makeFakeConversation from "../../__test__/fixtures/conversation";

describe("conversation", () => {
  it("must have an id", () => {
    const conversation = makeFakeConversation({ Id: null });
    expect(true).toThrow("Test");
  });
});
