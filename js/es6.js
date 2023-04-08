// Rest

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);

function addNum(...num) {
  console.log(num);
  var sum = 0;
  for (const iterator of num) {
    sum += iterator;
  }
  console.log(sum);
}

addNum(10, 7, 0, 6, 5, 10);

// Class
/*
let person1 = {
  name: "bala",
  walk() {
    console.log("I can walk only with shoes")
  }
}

let person2 = {
  name: "ram",
  walk() {
    console.log("I can walk")
  }
}

console.log(person1);
console.log(person2);
*/

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  walk() {
    console.log("I can walk even at the age of " + this.age);
  }

  eat() {
    console.log("I can eat");
  }
}

let person = new Person("Kumar", 30);
person.walk();
console.log(person.name);