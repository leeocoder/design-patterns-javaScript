/*
Imagine you have a robot that does multiple things like cooking, cleaning, and playing music.
The Single Responsibility Principle suggests that each robot should have one specific job.
For example, one robot cooks, another cleans, and a third one plays music.
This way, each robot is focused on doing one thing really well.

In programming, the Single Responsibility Principle is a guideline that says a class or function should have only one reason to change.
In other words, it should have only one responsibility or job.
*/

// Not following the Single Responsibility Principle

class Robot {
    constructor() {
      // Some properties and setup
    }
  
    performTasks() {
      this.cook();
      this.clean();
      this.playMusic();
      // Other tasks...
    }
  
    cook() {
      // Logic for cooking
    }
  
    clean() {
      // Logic for cleaning
    }
  
    playMusic() {
      // Logic for playing music
    }
  }
  