const uppercase = (str, callback) => {
  callback(str.toUpperCase());
}

test('should return the arg all in uppercase', (done) => {
  uppercase('olá', (tip) => {
    expect(tip).toMatch('OLÁ');
    done();
  })
})