// **********************
// 1. Class
// *********************
class Animal { 
    speak() {
      return this;
    }
    static eat() {
      return this;
    }
  }

  // 2. An Object
  let obj = new Animal();
  obj.speak(); // Animal {}
  let speak = obj.speak;
  speak(); // undefined

  // 3. Static Methods
  Animal.eat() // class Animal
  let eat = Animal.eat;
  eat(); // undefined

  // £££££££££££££££££££££££££££££££££££££££££££££££££
// 4. Encapsulation
  class Rectangle {
    _height = 0;
    _width;
    constructor(height, width) {    
      this._height = height;
      this._width = width;
    }

    getheigt(){
        return this._height;
    }
  }

  // ££££££££££££££££££££££££££££££££££££££££££££££££££££££££££
// 5. Inheritance
  class Pet { 
    constructor(name) {
      this.name = name;
    }
    
    speak() {
      console.log(this.name + ' makes a noise.');
    }
  }
  
  class Dog extends Pet {
    constructor(name) {
      super(name); // call the super class constructor and pass in the name parameter
    }
  
    speak() {
      console.log(this.name + ' barks.');
    }
  }
  
  let d = new Dog('Bingo');
  d.speak(); // Bingo barks.

// ££££££££££££££££££££££££££££££££££££££££££££
  // 6. Polymorphism

  class Person {
    constructor(name) {
      this.name = name;
    }
    me() {
      return `My name is ${this.name}`;
    }
  }
  const olaoluwa = new Person('Olaoluwa');
  console.log(olaoluwa.me());
    // ->  'My name is Olaoluwa'
  class Employee extends Person {
    constructor (name, salary) {
      super(name);
      this.salary = salary;
    }
    me() {
      return `My name is ${this.name} and my salary is ${this.salary}`;
    } 
  }
  
  const nick = new Employee('Nick', 3000);
  console.log(nick.me());
    // ->  'My name is Nick and my salary is 3000'

    // ££££££££££££££££££££££££££££££££££
    // 7 Abstraction
    class Story {
        constructor(text){
            this._text = text;
     }
     tellTale() {
        console.log('running from super class. Text: '+this._text);
}
    printChronicle() {
    throw new Error('You have to implement the method doSomething!');
}
    }

    class Fable extends Story {
 
        constructor(text){
           super(text);
        }
     
        tellTale() {
            console.log('running from extended class. Text: '+this._text);
        }
        
        printChronicle() {
           console.log('Method implemented successfully!');
        }
        
    }

    let b = new Fable('Howdy!');
    b.tellTale(); //gonna print: running from extended class. Text: Howdy
    b.printChronicle(); //gonna print: Method implemented successfully!