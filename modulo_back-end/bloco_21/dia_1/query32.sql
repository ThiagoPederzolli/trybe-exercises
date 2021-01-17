Write a query to find the manager ID and the salary of the lowest-paid employee for that manager
```
SELECT manager_id, MIN(salary)
FROM hr.employees
WHERE manager_id IS NOT NULL
GROUP BY manager_id
ORDER BY MIN(salary) DESC;
```