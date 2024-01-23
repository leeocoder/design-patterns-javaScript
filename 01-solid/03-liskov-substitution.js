/*
Liskov Substitution is a principle in programming that says if you have a certain type of object (let's call it a parent),
you should be able to replace it with any of its subtypes (children) without affecting the correctness of your program.

Imagine you have a family of shapes, and the parent is a general "Shape" class.
The children could be specific shapes like "Circle" and "Square." Now, according to Liskov Substitution,
you should be able to use a Circle or a Square wherever you expect a Shape, and everything should still work as expected.*/

// Parent class
class Shape {
    // Common method for all shapes
    getArea() {
      return 0; // Just a default value, as this method will be overridden by subclasses
    }
  }
  
  // Child class 1
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    // Override the getArea method for circles
    getArea() {
      return Math.PI * this.radius ** 2;
    }
  }
  
  // Child class 2
  class Square extends Shape {
    constructor(side) {
      super();
      this.side = side;
    }
  
    // Override the getArea method for squares
    getArea() {
      return this.side ** 2;
    }
  }
  
  // Now, let's use Liskov Substitution
  
  // Function expecting a Shape
  function printArea(shape) {
    console.log("Area:", shape.getArea());
  }
  
  // Creating instances of Circle and Square
  const myCircle = new Circle(5);
  const mySquare = new Square(4);
  
  // Using the printArea function with different shapes
  printArea(myCircle); // It prints the area of the circle
  printArea(mySquare); // It prints the area of the square
  