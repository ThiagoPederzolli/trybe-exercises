Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros que ainda não foram emprestados.
```
SELECT id, title
FROM hotel.books AS b
WHERE NOT EXISTS(
    SELECT *
    FROM hotel.books_lent
    WHERE b.Id = book_id
);
```