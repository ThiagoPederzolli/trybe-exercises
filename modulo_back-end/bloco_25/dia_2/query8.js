// 1. Calcule qual será o preço de venda de cada produto caso haja uma promoção de 50% de desconto.
```
db.products.aggregate([
  {
    $project: {
      totalPriceWithDiscount: {
        $divide: ["$sale_price", 2]
      }
    }
  }
])
```