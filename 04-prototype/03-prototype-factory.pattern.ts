/*

Prototype in Design Patterns:

A prototype in design patterns is like a sample or a model that we can use to create copies of something.
It's like having a template or a blueprint that helps us make similar things easily.

Example in Simple Terms:

Imagine you have a favorite toy,
let's say a teddy bear. Now, you love this teddy bear so much that you want another one exactly like it.
Instead of making a new teddy bear from scratch, you can use the one you already have as a prototype.
You take the existing teddy bear, and using it as a model, you create a new one that looks just like it.
*/

class TeddyBear {
    constructor(public color: string, public size: string) {}
  
    clone(): TeddyBear {
      // Create a new teddy bear using the current one as a prototype
      return new TeddyBear(this.color, this.size);
    }
  }
  
  // Creating an original teddy bear
  const originalTeddyBear = new TeddyBear("Brown", "Medium");
  
  // Using the prototype to create a new teddy bear
  const newTeddyBear = originalTeddyBear.clone();
  
  console.log(newTeddyBear.color); // Output: Brown
  console.log(newTeddyBear.size);  // Output: Medium
  
  /*
  In this TypeScript example, the TeddyBear class has a clone method that creates a new teddy bear based on the current one.
  So, instead of creating a teddy bear from scratch, we use the existing teddy bear as a prototype to make a new one with the same color and size.
  
  
  he Prototype design pattern is useful when you want to create new objects by copying an existing object,
  providing a way to clone objects without knowing their specific classes.
  
  Let's say you're working on a graphic design application where users can create various shapes like circles, rectangles, and triangles.
  Each shape has its own properties (e.g., color, size) and rendering logic.

Now, you want to allow users to duplicate shapes easily. Instead of creating a new shape from scratch,
you can use the Prototype design pattern to clone an existing shape.
  
  */


// Shape interface representing the common properties and methods of shapes
interface Shape {
  clone(): Shape;
  draw(): void;
}

// Concrete implementation of a Circle
class Circle implements Shape {
  constructor(public radius: number, public color: string) {}

  clone(): Shape {
    // Create a new circle using the current one as a prototype
    return new Circle(this.radius, this.color);
  }

  draw(): void {
    console.log(`Drawing a circle with radius ${this.radius} and color ${this.color}`);
  }
}

// Concrete implementation of a Rectangle
class Rectangle implements Shape {
  constructor(public width: number, public height: number, public color: string) {}

  clone(): Shape {
    // Create a new rectangle using the current one as a prototype
    return new Rectangle(this.width, this.height, this.color);
  }

  draw(): void {
    console.log(`Drawing a rectangle with width ${this.width}, height ${this.height}, and color ${this.color}`);
  }
}

// Client code
const originalCircle = new Circle(5, "red");
const clonedCircle = originalCircle.clone();
clonedCircle.draw();

const originalRectangle = new Rectangle(8, 6, "blue");
const clonedRectangle = originalRectangle.clone();
clonedRectangle.draw();
