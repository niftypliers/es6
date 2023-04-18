// Iterators.
let arr = [1, 2, 3];
let it_arr = arr[Symbol.iterator]();
console.log(arr);
console.log(it_arr.next());
console.log(it_arr.next());
console.log(it_arr.next());
console.log(it_arr.next());

let obj = {
  fName: "Ram",
  age: 30
};

obj[Symbol.iterator] = function() {
  return {
    next: () => {
      return {
        done: false,
        value: "hi"
      }
    }
  };
}

console.log(obj);
let it_obj = obj[Symbol.iterator]();
console.log(it_obj.next());


// Generators
function *nameGenerator() {
  yield 'Ram';
  yield 'Sara';
}

function *stringGenerator() {
  yield *nameGenerator();
  yield 'hi';
  yield 'yes';
}

const strings = stringGenerator();

console.log(strings.next());
console.log(strings.next());
console.log(strings.next());
console.log(strings.next());


// Passing value to Generators.
function *overrideValue() {
  const result = yield 'hi';
  console.log("gen:" + result);
}

const overrideIterator = overrideValue();
console.log(overrideIterator.next());
console.log(overrideIterator.next('abc'));


/*
REF:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators
https://blog.logrocket.com/javascript-iterators-and-generators-a-complete-guide/
https://madasamy.medium.com/explanation-about-iterators-and-generators-in-javascript-es6-f7e669cbe96e
*/
