const {hello, add } = require('./app')

describe('hello', () => {
  it('should output hello', () => {
    expect(hello()).toMatch('Hello');
  })
})

describe('add', () => {
  it('should output add', () => {
    expect(add(2, 2)).toBe(4);
    expect(add(3, 2)).toBe(5);
    expect(add(12, 2)).toBe(14);
    expect(add(-2, 2)).toBe(0);
    expect(add(-2, -2)).toBe(-4);
  });
  it('should not add strings', () => {
    expect(add(2, '2')).toBe(null);
  });
  it('should not add object', () => {
    expect(add(2, {})).toBe(null);
  });
  it('should not add array', () => {
    expect(add(2, [])).toBe(null);
  });
});