const fetch = require('node-fetch');

// function verifiedFetch(url) {
//   return new Promise((resolve, reject) => {
//     if (url === 'http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote') {
//       fetch(url)
//         .then((r) => console.log(r))
//         // .then((r) => resolve(r.value));
//     } else {
//       reject(new Error('endpoint não existe'));
//     }
//   });
// }

// verifiedFetch('http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote')

async function SWQuotes() {
  try {
    const quotes = await fetch('http://swquotesapi.diitaljedi.dk/api/SWQuote/RandomStarWarsQuote')
    const quote = await quotes.json();
    return console.log(quote)
  } catch (error) {
    return console.log(error.message)
  }
  
  // .then(quotes => quotes.json())
  // .then(quote => console.log(quote))
  // .catch((error) => console.log(error.message))
}

SWQuotes()