const {
  resetCities,
  isCity,
  removeCity,
  requestCities,
  retrieveCitiesFromCache,
  getCities
} = require('./cities');


describe ('Retrieving cites from cache', () => {
  beforeEach(() => {
    retrieveCitiesFromCache();
  });
  
  afterEach(() => {
    resetCities();
  });
  
  it('should have 1 city left after remove Belo Horizonte', () => {
    removeCity('Belo Horizonte');
    expect(getCities().length).toBe(1);
  });
  
  it('should have 2 city left after retrieving from cache', () => {
    expect(getCities().length).toBe(2);
  });
});

describe('Requesting cities from api', () => {
  beforeEach(() => {
    return requestCities(); // função assíncrona, com a declaração do return e estando no, irá aguardar essa etapa para con
  });

  afterEach(() => {
    resetCities();
  });

  it('should have 8 cities after requesting from api', () => {
    expect(getCities().length).toBe(8);
  });

  it('should have the city of Fortaleza', () => {
    expect(isCity('Fortaleza')).toBeTruthy();
  });

  it('should have the city of Belo Horizonte', () => {
    expect(isCity('Belo Horizonte')).toBeTruthy();
  });

  it('should have the city of São Paulo', () => {
    expect(isCity('São Paulo')).toBeTruthy();
  });

  it('should have the city of Recife', () => {
    expect(isCity('Recife')).toBeTruthy();
  });

  it('should have the city of Porto Alegre', () => {
    expect(isCity('Porto Alegre')).toBeTruthy();
  });

  it('should have the city of Goiânia', () => {
    expect(isCity('Goiânia')).toBeTruthy();
  });

  it('should have the city of Manaus', () => {
    expect(isCity('Manaus')).toBeTruthy();
  });

  it('should have the city of Piauí', () => {
    expect(isCity('Piauí')).toBeTruthy();
  });
})
