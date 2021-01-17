Write a query to append '@example.com' to email field
```
UPDATE hr.employees
SET email = CONCAT(email, '@example.com');
```