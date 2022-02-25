
const { getRepos } = require("./async-2");
const { fetcher } = require("./fetcher");
//mock al modulo fetcher
jest.mock("./fetcher");

describe("Function fetcher", () => {
  it("gets a list of repositories names (with mock)", () => {
    // arrange
    fetcher.mockResolvedValue([{ id: "js-exercises" }]);
    const url = "https://api.github.com/users/kabaros/repos";
    // act
    return getRepos(url).then(result => {
      // assert
      expect(result).toContain("js-exercises");
    });
  });

  it("gets a list of repositories names (with mock)", () => {
    // arrange
    fetcher.mockResolvedValue([{ id: 377100001 }, { id: "Goodbye" }, { id: 377100001 }, { id: 377100001 }]);
    const url = "https://api.github.com/users/kabaros/repos";
    const valor = (numero) => {
      return numero === 377100001
    }
    // act
    return getRepos(url).then(result => {
      // assert
      expect(result).toContain(377100001);
      expect(result.filter(valor).length).toBe(3);
    });
  });
});

