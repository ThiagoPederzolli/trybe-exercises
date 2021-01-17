// Exercício 12 : Descubra quais as três uf s que mais compraram no ano de 2020 . Retorne os documentos no seguinte formato:
db.vendas.aggregate([
  {
    $match: { //pega em vendas o período desejado. $match sempre deve ser priorizado no ínicio!
      dataVenda: {
        $gte: ISODate('2020-01-01'),
        $lte: ISODate('2020-12-31')  
      }
    }
  },
  {
    $lookup: { // une as duas coleções, juntando aos documentos da coleção vendas, uma nova propriedade chamada dadosCliente, que é um array de objetos que contem os dados de cada cliente na coleção clientes
      from: 'clientes',
      localField: 'clienteId',
      foreignField: 'clienteId',
      as: 'dadosCliente'
    }
  },
  {
    $unwind: "$dadosCliente" //quebra o array em objetos, mantendo as propriedades identitárias de cada objeto dentro do array, caso exista mais de um e permitindo o encadeamento de subdocumentos
  },
  {
    $group: { // pega essa quebra, agrupa por estados e soma o total de vendas de um em um.
      _id: "$dadosCliente.endereco.uf",
      totalVendas: {
        $sum: 1
      }
    }
  },
  {
    $sort: { // ordena em ordem decrescente o total de vendas.
      totalVendas: -1
    }
  },
  { $limit: 3 }, // limita para que sejam exibidos apenas os três primeiros documentos dessa busca
  {
    $project: { // cria a projeção de como será exibido o resultado dessa busca.
      _id: 0,
      uf: "$_id",
      totalVendas: 1
    }
  }
]);