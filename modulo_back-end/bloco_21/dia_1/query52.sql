Write a query to display the first name and salary for all employees. Format the salary to be 10 characters long, left-padded with the $ symbol. Label the column SALARY.
```
SELECT first_name,
LPAD(salary, 10, '$') SALARY
FROM employees;
```