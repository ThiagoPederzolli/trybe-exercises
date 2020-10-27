const fetchML = require('./fetch');
const fetch = require('node-fetch');
jest.mock('node-fetch');

it('should fetchML results', () => {
  const response = {
    "results": [
      {
        "id": "MLB1691915482",
        "title": "Disco Rígido Externo Seagate Expansion Stea1000400 1tb Preto",
        "price": 378,
      }
    ]    
  };
  
  fetch.mockImplementation(() => {
    return new Promise(()=> {
      Promise.resolve(response);
    })
  });

  return fetchML()
  .then((results) => {
    expect(results.length).toBe(1);
    const result = results[0];
    expect(result.id).toBe("MLB1691915482");
    expect(result.title).toBe("Disco Rígido Externo Seagate Expansion Stea1000400 1tb Preto");
    expect(result.price).toBe(378);
  })
});