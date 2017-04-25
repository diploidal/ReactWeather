// EXAMPLE OF ARROW FUNCTIONS

// var names = ['Andrew', 'Max', 'John', 'James'];
//
// names.forEach(function(name) {
//   console.log('forEach ', name);
// });
//
// names.forEach((name)=> {
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Maksymilian'));

// var person = {
//   name: 'Maks',
//   greet: function() {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name);
//     });
//   }
// };
//
// person.greet();




// Challenge area
function add(a,b) {
  return a + b;
}

// console.log(add(1, 3));
// console.log(add(9, 0));

// addStatement
var addStatement = (a, b) => {
  return a + b;
}
console.log(addStatement(4, 7));

// addExpression
var addExpression = (a, b) => a + b;
console.log(addExpression(5, 11));
