// Ref: https://www.w3schools.com/js/js_this.asp

// this
const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

console.log(person.firstName);
console.log(person.fullName());

var fullName = person.fullName;
console.log(fullName.bind(person)());


// Arrow function
var square = function (num) {
    return num * num;
}

var square = num => num * num;

console.log((square(5)));

const data = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : () => this.firstName + " " + this.lastName
  };

console.log(data.fullName());
