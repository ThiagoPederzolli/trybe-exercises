Write a query to get the employee id, first name and hire month
```
SELECT employee_id, first_name, MID(hire_date, 6, 2) as hire_month FROM employees;
```