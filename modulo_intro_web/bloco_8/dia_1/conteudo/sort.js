const points = [40, 100, 1, 5, 25, 10];
const pointSort = points.sort();
console.log(pointSort);
points.sort(function(a, b){ return a - b });
console.log(points); // [1, 5, 10, 25, 40, 100]