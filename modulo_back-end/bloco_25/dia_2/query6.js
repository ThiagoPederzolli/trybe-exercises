// 1. Calcule qual o valor total em estoque de cada produto, considerando o preço de venda e a quantidade;
```
db.products.aggregate([
  {
    $project: {
      totalValue: {
        $multiply: ["$sale_price", "$quantity"]
      }
    }
  }
])
```