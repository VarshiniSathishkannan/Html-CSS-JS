function myFunction2() {
    document.getElementById("demo2").innerHTML = "Paragraph changed.";
}


let a = 0;
const b = 2;
console.log(a+b)
alert('hey')

const time = 9

if (time < 10) {
    greeting = "Good morning";
  } else if (time < 20) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
}



typeof {name:'John'} 

const date = new Date();

(date instanceof Date);

const fruits = ["apples", "bananas", "oranges"];

(fruits instanceof Array);

// Create an Object
const p = {
    firstName: "John",
    lastName: "Doe",
    age: 50
  };
  
  // Destructuring
  let {firstName, lastName} = p;

// JavaScript Declarations are Hoisted
// In JavaScript, a variable can be declared after it has been used.

// In other words; a variable can be used before it has been declared.

"use strict";
x = 3.14;                // This will cause an error

class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age() {
      const date = new Date();
      return date.getFullYear() - this.year;
    }
  }
  
const myCar = new Car("Ford", 2014);

// The == comparison operator always converts (to matching types) before comparison.

// The === operator forces comparison of values and type:


// DOM:

// document.getElementById(id)	Find an element by element id
// document.getElementsByTagName(name)	Find elements by tag name
// document.getElementsByClassName(name)	Find elements by class name

// Changing HTML Elements
// Property	Description
// element.innerHTML =  new html content	Change the inner HTML of an element
// element.attribute = new value	Change the attribute value of an HTML element
// element.style.property = new style	Change the style of an HTML element
// Method	Description
// element.setAttribute(attribute, value)	Change the attribute value of an HTML element

// Adding and Deleting Elements
// Method	Description
// document.createElement(element)	Create an HTML element
// document.removeChild(element)	Remove an HTML element
// document.appendChild(element)	Add an HTML element
// document.replaceChild(new, old)	Replace an HTML element
// document.write(text)	Write into the HTML output stream