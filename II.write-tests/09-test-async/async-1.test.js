const {getRepos} = require("./async-1");

describe("Function getRepos", () => {
  it("Giving the url, should check if it contains 'dom-ajax-repo'", async() => {
    // Arrange
    const url = "https://api.github.com/users/kabaros/repos";
    // Act
    const result = await getRepos(url);

    //Assert
    expect(result).toContain("dom-ajax-repo");
  });
});

