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
  it('Should return Mark for arg id number 4', async () => {
    const name = await getUserName(4);
    expect(name).toEqual( 'Mark');
  });
  it('Should return Paul for arg id number 5', async () => {
    const name = await getUserName(5);
    expect(name).toEqual( 'Pul');
  }); 
});

describe('getUserName tests error message', () => {
  it('Should return a error message that the id was not found if arg id doesnt exists in db', async () => {
  try {
    await getUserName(6);
  } catch (error) {
    expect(error).toEqual({ error: 'User with 6 not found.' });
  }
  });  
});