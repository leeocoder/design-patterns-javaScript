/*
    Imagine you are building a toy car, and this car needs a battery to run.
    Instead of building the battery inside the car,
    you decide to make the car able to use any battery.
    This way, you can easily switch different batteries depending on your needs.

    Dependency Injection in programming is a similar idea.
    It's a way of designing your code so that a component (like a function or a class)
    can work with different pieces of code (dependencies) without being tightly connected to any specific one.
    This makes your code more flexible and easier to change.
*/

// Toy car without dependency injection

class ToyCarWithoutInjection {
    constructor() {
      // Hardcoded dependency, the car always uses the same battery
      this.battery = new StandardBattery();
    }
  
    start() {
      console.log("Car is running with", this.battery.getPower(), "power");
    }
  }
  
  class StandardBattery {
    getPower() {
      return "standard";
    }
  }
  
  // Now, with dependency injection
  
  class ToyCarWithInjection {
    constructor(battery) {
      // The car can use any battery passed to it
      this.battery = battery;
    }
  
    start() {
      console.log("Car is running with", this.battery.getPower(), "power");
    }
  }
  
  // Different types of batteries
  
  class StandardBattery {
    getPower() {
      return "standard";
    }
  }
  
  class HighPowerBattery {
    getPower() {
      return "high power";
    }
  }
  
  // Using Dependency Injection
  
  const carWithStandardBattery = new ToyCarWithInjection(new StandardBattery());
  const carWithHighPowerBattery = new ToyCarWithInjection(new HighPowerBattery());
  
  carWithStandardBattery.start(); // Outputs: "Car is running with standard power"
  carWithHighPowerBattery.start(); // Outputs: "Car is running with high power"
  