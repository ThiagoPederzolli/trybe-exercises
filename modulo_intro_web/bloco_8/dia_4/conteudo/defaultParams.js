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