const {getRepos} = require("./async-2");
const {fetcher} = require("./fetcher");
//mock al modulo fetcher
jest.mock("./fetcher");

describe("Function fetcher", () => {
  it("gets a list of repositories names (with mock)", () => {
  // arrange
  fetcher.mockResolvedValue([{ name: "js-exercises" }]);
  const url = "https://api.github.com/users/kabaros/repos";

  // act
  return getRepos(url).then(result => {
  // assert
    expect(result).toContain("js-exercises");
  });
});
})

test("a more deterministic test", function() {});
