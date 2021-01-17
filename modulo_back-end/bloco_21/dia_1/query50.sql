Write a query to display the length of first name for employees where last name contain character 'c' after 2nd position.
```
SELECT first_name, last_name FROM employees WHERE INSTR(last_name,'C') > 2;
```