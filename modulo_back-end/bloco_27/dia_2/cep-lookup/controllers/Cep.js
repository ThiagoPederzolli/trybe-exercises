const CEP = require('../services/Cep');

const checkCep = async (req, res) => {
  const { cep } = req.query;
  // console.log('Console.log  do cep', cep);
  // console.log('Console.log  do req.params', req.params);

  const searchedCep = await CEP.checkCep(cep);

  if(searchedCep === 'inválido') {
    return res.status(400).json({message: `CEP ${searchedCep}`});
  }
  
  if(searchedCep === 'não encontrado') {
    return res.status(400).json({message: `CEP ${searchedCep}`});
  }

  return res.status(200).json(searchedCep);
}

module.exports = {
  checkCep,
}