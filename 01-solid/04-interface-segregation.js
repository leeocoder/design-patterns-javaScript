// Slipt up interface into different parts so that people don't implement more they need

/*
Imagine you have a bunch of friends who each have different hobbies.
Some like playing video games, some enjoy reading books, and others love playing sports.
Now, let's say you have a gaming console with various games, and you want to share it with your friends.

Interface Segregation is a principle in programming that suggests you should break down big,
complex interfaces into smaller, more specific ones so that you only need to use what you actually need.
In our friend analogy, it's like giving each friend only the games they enjoy, not all the games on your console.
*/

// Big, complex interface
class EntertainmentSystem {
    playVideoGame() {
      // Logic for playing video games
    }
  
    readBook() {
      // Logic for reading books
    }
  
    playSports() {
      // Logic for playing sports
    }
  }
  
  // Now, let's apply Interface Segregation
  // Separate interfaces for specific activities
  class VideoGamePlayer {
    playVideoGame() {
      // Logic for playing video games
    }
  }
  
  class BookReader {
    readBook() {
      // Logic for reading books
    }
  }
  
  class SportsPlayer {
    playSports() {
      // Logic for playing sports
    }
  }
  
  //Unfortunately the implements is only available for typescript
  // Friends implementing only what they need
  class GamingFriend extends VideoGamePlayer {
    playVideoGame() {
      // Logic for playing video games
    }
  }
  
  class BookLoverFriend extends BookReader {
    readBook() {
      // Logic for reading books
    }
  }
  
  class SportsFanFriend extends SportsPlayer {
    playSports() {
      // Logic for playing sports
    }
  }
  