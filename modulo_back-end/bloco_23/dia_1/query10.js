// Exercício 10: Pule 5 documentos e exiba os campos _id , title , authors e status do livros com status "MEAP" , limitando-se a 10 documentos.
```
db.books.find(
    {
        status: "MEAP"
    },
    {
        title: 1,
        authors: 1,
        status: 1
    }
).skip(5).limit(10).pretty()
```