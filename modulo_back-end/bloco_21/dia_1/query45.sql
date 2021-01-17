 Write a query to find all employees where first names are in upper case.
```
SELECT * FROM employees 
WHERE first_name = BINARY UPPER(first_name);
```