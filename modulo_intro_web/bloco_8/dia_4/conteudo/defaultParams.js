function say (message = 'Hello', name = 'World') {
  console.log(`${message} ${name}`);
}

say('Hey', 'People');
say(undefined, 'People');
say('Hi', undefined);
say(undefined, undefined);

// > Hey People
// > Hello People
// > Hi World
// > Hello World

// Modify the function increment by adding default parameters so that it will add 1 to number if value is not specified.
// The result of increment(5, 2) should be 7.
// The result of increment(5) should be 6.
// A default parameter value of 1 should be used for value.

// Only change code below this line
const increment = (number, value = 1) => number + value;
// Only change code above this line


