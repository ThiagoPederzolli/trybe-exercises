// Exercício 13 : Encontre qual foi o total de vendas e a média de vendas de cada uf no ano de 2019 . Ordene os resultados pelo nome da uf . Retorne os documentos no seguinte formato:
db.vendas.aggregate([
  {
    $match: { //pega em vendas o período desejado.
      dataVenda: {
        $gte: ISODate('2019-01-01'),
        $lte: ISODate('2019-12-31')
      }
    }
  },
  {
    $lookup: { // une as duas coleções, juntando aos documentos da coleção vendas, uma nova propriedade chamada dadosCliente, que é um array de objetos que contem os dados de cada cliente na coleção clientes
      from: 'clientes',
      localField: 'clienteId',
      foreignField: 'clienteId',
      as: 'cliente'
    }
  },
  {
    $unwind: "$cliente"  //quebra o array em objetos, mantendo as propriedades identitárias de cada objeto dentro do array, caso exista mais de um e permitindo o encadeamento de subdocumentos
  },
  {
    $group: { // pega essa quebra, agrupa por estados, cria uma propriedade médiaVendas que calcula a média do valor total de cada venda  e soma o total de vendas de um em um.
      _id: "$cliente.endereco.uf",
      mediaVendas: { $avg: "$valorTotal" },
      totalVendas: { $sum: 1 }
    }
  },
  {
    $project: { // cria a projeção de como será exibido o resultado dessa busca.
      _id: 0,
      uf: "$_id",
      mediaVendas: 1,
      totalVendas: 1
    }
  },
  {
    $sort: { // ordena os estados por ordem crescente a partir da propriedade uf, nessa query veio posteriormente ao $project por depender de uma propriedade criada na projeção do resultado apresentado.
      uf: 1
    }
  }
]);