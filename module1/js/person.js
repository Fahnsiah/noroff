// Object declaration and initialization
let person = {
  name: "John",
  age: 30,
  gender: "male",
  greet: function () {
    alert(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  },
};

person.greet();

// Define an object with a property
const person1 = {
  name: "John",
};

// Get the property descriptor of the 'name' property
const descriptor = Object.getOwnPropertyDescriptor(person1, "name");

// Log the property descriptor
alert(JSON.stringify(descriptor));
