const pokeTips = () => {
  return 'Bulbasaur é o melhor pokemon para começar.';
}

const pokeTipsCallback = (callback) => {
  setTimeout(() => {
    callback('Bulbasaur é o melhor pokemon para começar.');
  }, 500);
}

test('poketips returns the string we expect', () => {
  expect(pokeTips()).toMatch('Bulbasaur é o melhor pokemon para começar.');
});

test('pokeTipsCallback returns the string we expect', (done) => {
  pokeTipsCallback((tip) => {
    expect(tip).toMatch('Bulbasaur é o melhor pokemon para começar.');
    done();
  });
});