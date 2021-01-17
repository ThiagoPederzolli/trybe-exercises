Write a query to get the job_id and related employee's id.
```
SELECT job_id, GROUP_CONCAT(employee_id, ' ') 'Employees ID'
FROM employees GROUP BY job_id;
```