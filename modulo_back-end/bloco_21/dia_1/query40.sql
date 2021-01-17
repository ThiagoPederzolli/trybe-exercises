
Write a query to get the details of the employees where the length of the first name greater than or equal to 8
```
SELECT * FROM hr.employees
WHERE LENGTH(first_name) >= 8;
```