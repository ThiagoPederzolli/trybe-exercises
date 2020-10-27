const strings = require("./strings");

describe('exclusive uppercase implemetation', () => {
  it("upperCase to lowerCase and after that restore to upperCase", () => {
    const textTransform = jest
      .spyOn(strings, "upperCase")
      .mockImplementation(a => a.toLowerCase());
    expect(textTransform("TRYBE")).toBe("trybe");
    expect(textTransform).toHaveBeenCalled();
    expect(textTransform).toHaveBeenCalledTimes(1);
    expect(textTransform).toHaveBeenCalledWith("TRYBE");
  
    strings.upperCase.mockRestore();
    expect(strings.upperCase("trybe")).toBe("TRYBE");
  });
});