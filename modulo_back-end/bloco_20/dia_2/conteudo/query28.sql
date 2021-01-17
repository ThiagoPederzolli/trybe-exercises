- Vá até a tabela language do sakila e crie uma pesquisa que mostre os 5 idiomas cadastrados, mas não mostre o idioma english.
```
SELECT * FROM sakila.language
LIMIT 5 OFFSET 1;
```