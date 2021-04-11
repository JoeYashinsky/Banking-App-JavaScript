'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Joe Tinker',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Johnnie Evers',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Frank Chance',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Mordecai Brown',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements_row">
      <div class="movements_type movements_type--${type}">${
        i + 1
    } ${type}</div>
      <div class="movements_value">${mov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML
    ('afterbegin')
  });
};
displayMovements(account1.movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// ARRAY METHODS
/*
let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE  (Does NOT change orig. array)
console.log(arr.slice(2));  //  (3) ["c", "d", "e"]
console.log(arr.slice(2, 4));  //  (2) ["c", "d"]
console.log(arr.slice(-2));  //  (2) ["d", "e"]
console.log(arr.slice(-1));  //  always last element of array (-1).  ["e"]
console.log(arr.slice(1, -2));  //  (2)  ["b", "c"]

console.log(arr.slice()); // (5) ["a", "b", "c", "d", "e"]
console.log([...arr]);   //  (5) ["a", "b", "c", "d", "e"]

// SPLICE  (mutates the original array)
// console.log(arr.splice(2));  //  (3) ["c", "d", "e"]
// console.log(arr); // (2) ["a", "b"] Changed array loses the part that was spliced

arr.splice(-1);
console.log(arr);  //  (4) ["a", "b", "c", "d"]  // Removed last element, 'e'
arr.splice(1, 2);
console.log(arr); // (2) ["a", "d"]  2nd number is # of elements want to delete

// REVERSE  (mutates the original array)
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());  //(5) ["j", "g", "h", "i", "j"]
console.log(arr2);  // (5) ["f", "g", "h", "i", "j"]

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);  // (10) ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]
console.log([...arr, ...arr2]);  // same as above  (10) ["a", "b", "c", .....]

// JOIN
console.log(letters.join(' - '));  // (10) a - b - c - d - e - f - g - h - i - j
*/

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}
// You deposited 200
// You deposited 450
// You withdrew 400
// You deposited 30000
// You withdrew 650    ........

for (const [i, transaction] of movements.entries()) {
  if (transaction > 0) {
    console.log(`Transaction ${i + 1}: You deposited ${transaction} dollars.`);
  } else {
    console.log(
      `Transaction ${i + 1}: You withdrew ${Math.abs(transaction)} dollars.`
    );
  }
}
// Transaction 1: You deposited 200 dollars.
// Transaction 2: You deposited 450 dollars.
// Transaction 3: You withdrew 400 dollars.
// Transaction 4: You deposited 3000 dollars.

console.log('------ FOREACH -----');
movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
});
// Same exact output as 'for' above

console.log('---- FOREACH ----');
movements.forEach(function (transaction, index, array) {
  if (transaction > 0) {
    console.log(
      `Transaction ${index + 1}: You deposited ${transaction} dollars.`
    );
  } else {
    console.log(
      `Transaction ${index + 1}: You withdrew ${Math.abs(transaction)} dollars.`
    );
  }
});
// Transaction 1: You deposited 200 dollars.
// Transaction 2: You deposited 450 dollars.
// Transaction 3: You withdrew 400 dollars.
// Transaction 4: You deposited 3000 dollars.

// MAP
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});
// USD: United States dollar
// EUR: Euro
// GBP: Pound sterling

// SET
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
// Set(3) {"USD", "GBP", "EUR"}   ONLY shows unique values
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
//  USD: USD
//  GBP: GBP
//  EUR: EUR
