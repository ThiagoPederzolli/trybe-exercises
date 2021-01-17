Write a query to get the employee id, email id (discard the last three characters).
```
SELECT employee_id, REVERSE(SUBSTR(REVERSE(email), 4)) as Email_ID 
from employees;
```