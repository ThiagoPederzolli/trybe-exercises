const fetch = require('node-fetch');

const fetchML = (query = 'computador') => {
  fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`)
  .then((response) => response.json())
  .then((data) => data.results);  
}

module.exports = fetchML;