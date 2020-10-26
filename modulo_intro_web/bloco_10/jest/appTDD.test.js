const {hello, add, removeSNames } = require('./appTDD');

// describe('hello', () => {
//   it('should output hello', () => {
//     expect(hello()).toMatch('Hello');
//   })
// })

// describe('add', () => {
//   it('should output add', () => {
//     expect(add(2, 2)).toBe(4);
//     expect(add(3, 2)).toBe(5);
//     expect(add(12, 2)).toBe(14);
//     expect(add(-2, 2)).toBe(0);
//     expect(add(-2, -2)).toBe(-4);
//   });
//   it('should not add strings', () => {
//     expect(add(2, '2')).toBe(null);
//   });
//   it('should not add object', () => {
//     expect(add(2, {})).toBe(null);
//   });
//   it('should not add array', () => {
//     expect(add(2, [])).toBe(null);
//   });
// });

describe('removeSNames', () => {
  it('should remove all s names', () => {
    const names = ['Scott', 'Courtney', 'Steve'];
    expect(removeSNames(names)).not.toContain('Scott');
    expect(removeSNames(names)).not.toContain('Steve');
  });
  it('should not remove other names', () => {
    const names = ['Scott', 'Courtney', 'Thiago'];
    expect(removeSNames(names)).toContain('Courtney');
    expect(removeSNames(names)).toContain('Thiago');
  });
  it('should account for case', () => {
    const names = ['Scott', 'Courtney', 'Thiago', 'scott'];
    expect(removeSNames(names)).not.toContain('Scott');
    expect(removeSNames(names)).not.toContain('scott');
    });
})