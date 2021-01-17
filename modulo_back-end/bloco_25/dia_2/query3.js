// 1. Retorne o menor número inteiro relativo ao preço de venda de cada produto;
```
db.products.aggregate([
  {$project: {lowestPrice: {$floor: "$sale_price"}}}
])
```