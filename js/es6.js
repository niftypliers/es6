/*let arrayNew = [1, return 2, return 3, return undefined];

const it = arrayNew[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
*/

const userNamesGroupedByLocation = {
  Tokio: [
    'Aiko',
    'Chizu',
    'Fushigi',
  ],
  'Buenos Aires': [
    'Santiago',
    'Valentina',
    'Lola',
  ],
  'Saint Petersburg': [
    'Sonja',
    'Dunja',
    'Iwan',
    'Tanja',
  ],
};


//console.log(userNamesGroupedByLocation);



userNamesGroupedByLocation[Symbol.iterator] = function() {
  const cityKeys = Object.keys(this);
  //console.log(cityKeys);

let cityIndex = 0;
let userIndex = 0;
  return {
    next: () => {
      const users = this[cityKeys[cityIndex]];
      const user = users[userIndex];

      //console.log(user);

      const isLastUser = userIndex >= users.length - 1;
      if (isLastUser) {
        // Reset user index
        userIndex = 0;
        // Jump to next city
        cityIndex++
      } else {
        userIndex++;
      }

      return {
        done: false,
        value: user,        
      };
    },
  };
}

const it = userNamesGroupedByLocation[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

/*
REF:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators
https://blog.logrocket.com/javascript-iterators-and-generators-a-complete-guide/
 https://madasamy.medium.com/explanation-about-iterators-and-generators-in-javascript-es6-f7e669cbe96e