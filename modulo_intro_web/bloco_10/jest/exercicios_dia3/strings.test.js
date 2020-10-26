const strings = require('./strings');
jest.mock('./strings');

it('upperCase should return in lowercase', () => {
  strings.upperCase.mockImplementation(a => a.toLowerCase());
  expect(strings.upperCase("TRYBE")).toBe("trybe");
  expect(strings.upperCase).toHaveBeenCalled();
  expect(strings.upperCase).toHaveBeenCalledTimes(1);
  expect(strings.upperCase).toHaveBeenCalledWith("TRYBE");
});

it('firstChar should return lastChar', () => {
  strings.firstChar.mockImplementation(a => a.charAt(a.length - 1));
  expect(strings.firstChar("Trybe")).toBe("e");
  expect(strings.firstChar).toHaveBeenCalled();
  expect(strings.firstChar).toHaveBeenCalledTimes(1);
  expect(strings.firstChar).toHaveBeenCalledWith("Trybe");
});

it('concatString should return three strings concat', () => {
  strings.concatString.mockImplementation((a, b, c) => a.concat(b, c));
  expect(strings.concatString("go ", "Try", "be")).toBe("go Trybe");
  expect(strings.concatString).toHaveBeenCalled();
  expect(strings.concatString).toHaveBeenCalledTimes(1);
  expect(strings.concatString).toHaveBeenCalledWith("go ", "Try", "be");
});