const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
      if (users[id]) {
        return resolve(users[id]);
      }

      return reject({ error: 'User with ' + id + ' not found.' });
  });
}

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
}

describe('getUserName tests', () => {
  it('Should return Mark for arg id number 4', () => {
    return expect(getUserName(4)).resolves.toMatch( 'Mark');
  });
  it('Should return Paul for arg id number 5', () => {
    return expect(getUserName(5)).resolves.toMatch( 'Paul');
  }); 
});

describe('getUserName tests error message', () => {
  it('Should return a error message that the id was not found if arg id doesnt exists in db', () => {
    return expect(getUserName(6)).rejects.toEqual({ error: 'User with 6 not found.' });
  });  
});