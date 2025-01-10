class User {
  // Your code for class User here
  #firstName;
  #secondName;
  #age;
  constructor(firstName, secondName, age) {
    if (typeof firstName !== 'string') {
      throw new Error('First name must be a string');
    }
    if (typeof secondName !== 'string') {
      throw new Error('Second name must be a string');
    }
    if (typeof age !== 'number') {
      throw new Error('Age must be a number');
    }

    this.firstName = firstName;
    this.secondName = secondName;
    this.age = age;
  }

  get age() {
    return this.#age;
  }

  set age(age) {
    this.#age = age;
  }

  set firstName(firstName) {
    this.#firstName = firstName;
  }

  set secondName(secondName) {
    this.#secondName = secondName;
  }

  get name() {
    return `${this.#firstName} ${this.#secondName}`;
  }

  introduce() {
    return `My name is ${this.name}, I'm ${this.#age}`;
  }

  celebrateBirthday() {
    this.age++
  }
}

/**
 * Create a class named User
 * @type {User}
 */
module.exports.User = User;

/**
 * Create new User object and return it
 * @param {string} firstName
 * @param {string} secondName
 * @param {number} age
 * @returns {User}
 */
module.exports.createUser = function (firstName, secondName, age) {
   return new User(firstName, secondName, age);
};

/**
 * Create Array of Users by provided Array with user data (firstName, secondName, age)
 * @param {Array<{ firstName, secondName, age }>} data
 * @returns {Array<User>}
 */
module.exports.createUsers = function (data) {
  return data.map(function(user) {
    return new User(user.firstName, user.secondName, user.age);
  });
};

/**
 * Find Users in Array of Users who's age equals the provided age
 * @param {Array<User>} users
 * @param {number} age
 * @returns {Array<User>}
 */
module.exports.findUsersByAge = function (users, age) {
  return users.filter(user => user.age === age);
};

/**
 * Return a function that sort provided Array of Users using a comparator function from TestUtils
 * @param TestUtils
 * @returns {function(*): *[]}
 */
module.exports.createUsersSortFn = function (TestUtils) {
  return function (users) {
    return users.sort(TestUtils.sortComparatorByAge);
  }
};

/**
 * In Array of Users every User under odd index in Array should celebrate his birthday
 * @param {Array<User>} users
 * @return {Array<User>}
 */
module.exports.celebrate = function (users) {
  users.forEach((user, index) => {
    if (index % 2 === 0) {
      user.celebrateBirthday();
    }
  });
  return users;
};
