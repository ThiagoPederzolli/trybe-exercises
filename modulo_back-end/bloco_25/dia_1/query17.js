// Exercício 7 : Utilizando a mesma agregação do exercício anterior, adicione um estágio de projeção para modificar os documentos de saída, de forma que se pareçam com o documento a seguir (não se importe com a ordem dos campos):
```
db.clientes.aggregate([{$group: {_id: {uf: "$endereco.uf", sexo: "$sexo"}, total: {$sum: 1}}}, {$project: {_id: 0, estado: "$_id.uf", sexo: "$_id.sexo", total: 1}}])
```