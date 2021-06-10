const CEP = require('../models/Cep');
const axios = require('axios').default;

const fetchCep = async (cep) => {
  const response = await axios.get(`http://cep.la/${cep}`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    }
  });
  const data = response.data;
  // console.log(response);
  // console.log('console do response.data ', response.data);
  return data;
}

const checkCep = async (inputCep) =>  {
  let statusCep;
  const regexp = /[-.]/g;
  // console.log('Console.log dentro do checkCep', inputCep);
  const newInputCep = inputCep.replace(regexp, '');
  const regexpCEP = /\d{5}[-\s]?\d{3}/g;
  const validateCEP = newInputCep.match(regexpCEP);

  if(!validateCEP) {
    statusCep = 'inválido';
    return statusCep;
  }

  const searchCep = await CEP.getCep(newInputCep);

  if (searchCep) {
    return cep;
  } 
  
  const newCep = await fetchCep(newInputCep);
  
  if (!newCep) {
    statusCep = 'não encontrado';
    return statusCep;
  }

  const { cep, uf, cidade, bairro, logradouro } = newCep;
  await CEP.saveCep(cep, uf, cidade, bairro, logradouro);
  return newCep;
}

module.exports = {
  checkCep,
}