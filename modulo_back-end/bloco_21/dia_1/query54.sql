Write a query to display the employees with their code, first name, last name and hire date who hired either on seventh day of any month or seventh month in any year.
```
SELECT employee_id,first_name,last_name,hire_date 
FROM employees 
WHERE POSITION("07" IN DATE_FORMAT(hire_date, '%d %m %Y'))>0;
```