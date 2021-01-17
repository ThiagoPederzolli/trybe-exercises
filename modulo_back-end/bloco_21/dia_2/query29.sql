Select all the data of employees, including each employee's department's data.
```
SELECT e.*,  d.*
FROM praticando.Employees AS e
INNER JOIN praticando.Departments AS d
ON e.Department = d.code;
```