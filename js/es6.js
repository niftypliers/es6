// Array map.
let colors = ['red', 'green', 'blue'];


for (let index = 0; index < colors.length; index++) {
  const element = colors[index];
  console.log(element);
}

colors.map( (color) => console.log(color));

// Destructuring.

let address = {
  'street': 'Raman Street',
  'area': 'Richmond',
  'city': 'Chennai'
}

let {street, loc, region} = address;

/*street = address.street;
area = address.area;
city = address.city;
*/
console.log(street);
console.log(area);
console.log(city);

// Spread operator.

let num1 = [1, 2, 3];
let num2 = [4, 5, 6];

let num = [...num1, 'hello', ...num2, 'world'];

// [1,2,3,'hello', 4,5,6,'world']

//console.log(num1);
console.log(num);
