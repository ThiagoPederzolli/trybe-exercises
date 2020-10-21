const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};
// const altasTemperaturas = [ 5, 77, 80];
// Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables today and tomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object.
// You should remove the ES5 assignment syntax.
// You should use destructuring to create the today variable.
// You should use destructuring to create the tomorrow variable.
// today should be equal to 77 and tomorrow should be equal to 80.

// function hoje([ontem, hoje, amanha]) = HIGH_TEMPERATURES;

// Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables highToday and highTomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object
// You should remove the ES5 assignment syntax.
// You should use destructuring to create the highToday variable.
// You should use destructuring to create the highTomorrow variable.
// highToday should be equal to 77 and highTomorrow should be equal to 80.
  
const {today:highToday, tomorrow:highTomorrow} = HIGH_TEMPERATURES;

// Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables lowToday and highToday the values of today.low and today.high from the LOCAL_FORECAST object
// You should remove the ES5 assignment syntax.
// You should use destructuring to create the lowToday variable.
// You should use destructuring to create the highToday variable.
// lowToday should be equal to 64 and highToday should be equal to 77.
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

  
const {today: { low:lowToday, high:highToday}} = LOCAL_FORECAST;


