Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros estão atualmente emprestados e que contêm a palavra "lost" no título.
```
SELECT id, title
FROM hotel.books b
WHERE EXISTS(
    SELECT *
    FROM hotel.books_lent
    WHERE b.Id = book_id AND b.title like '%lost%'
);
```