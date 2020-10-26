const dogPicture = require("./dogPicture");
describe("testando a requisição", () => {
  dogPicture.fetchDog = jest.fn();
  afterEach(dogPicture.fetchDog.mockReset);

  test("testando requisição caso a promisse resolva", async () => {
    dogPicture.fetchDog.mockResolvedValue("request sucess");

    dogPicture.fetchDog();
    expect(dogPicture.fetchDog).toHaveBeenCalled();
    expect(dogPicture.fetchDog).toHaveBeenCalledTimes(1);
    expect(dogPicture.fetchDog()).resolves.toBe("request sucess");
    expect(dogPicture.fetchDog).toHaveBeenCalledTimes(2);
  });

  test("testando requisição caso a promisse seja rejeitada", async () => {
    dogPicture.fetchDog.mockRejectedValue("request failed");

    expect(dogPicture.fetchDog).toHaveBeenCalledTimes(0);
    expect(dogPicture.fetchDog()).rejects.toMatch("request failed");
    expect(dogPicture.fetchDog).toHaveBeenCalledTimes(1);
  });
});