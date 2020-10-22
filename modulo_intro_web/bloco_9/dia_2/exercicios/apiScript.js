const API_URL = 'https://icanhazdadjoke.com/';
const jokeContainer = document.querySelector('#jokeContainer');
const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};

const fetchJoke = () => {
  // Adicionar lógica aqui!
  fetch(API_URL, myObject)
  .then(response => response.json())
  .then(data => data.joke)
  .then(joke => jokeContainer.innerText = joke)
};

window.onload = () => fetchJoke();



