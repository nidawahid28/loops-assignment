// 4.Exploring Objects with for...in Loop
// Objective: Practice working with objects in TypeScript and iterating over their properties using 
// a for...in loop.
// Instructions:
// 1. Create a simple object with three items:
// o Define an object called myObject with three properties: item1, item2, and item3, 
// each with corresponding string values.
// 2. Use a for...in loop to get properties' names and values from the object:
// o Iterate through the properties of myObject using a for...in loop.
// o Inside the loop, print each property's name and its corresponding value to the 
// console
// Create a simple object with three items
var myObject = {
    item1: "T-Shirts",
    item2: "Sweater",
    item3: "Scarf"
};
// Use for in loop to get properties names and values from object
for (var a in myObject) {
    console.log("".concat(a, ": ").concat(myObject[a]));
}
