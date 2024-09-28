// enum Animal {
//   Dog,
//   Cat,
//   Duck,
// }

// function makeSound(animal: Animal) {
//   if (animal === Animal.Dog) {
//     console.log('Woof');
//   } else if (animal === Animal.Cat) {
//     console.log('Meow');
//   } else if (animal === Animal.Duck) {
//     console.log('Quack');
//   }
// }

// makeSound(Animal.Dog);

interface Animal {
  isDog(): boolean;
  isCat(): boolean;
  isDuck(): boolean;
  vocalize(): void;
}

class Dog implements Animal {
  isDog() {
    return true;
  }
  isCat() {
    return false;
  }
  isDuck() {
    return false;
  }
  vocalize() {
    console.log('Woof');
  }
}

class Cat implements Animal {
  isDog() {
    return false;
  }
  isCat() {
    return true;
  }
  isDuck() {
    return false;
  }
  vocalize() {
    console.log('Meow');
  }
}

class Duck implements Animal {
  isDog() {
    return false;
  }
  isCat() {
    return false;
  }
  isDuck() {
    return true;
  }
  vocalize() {
    console.log('Quack');
  }
}

function makeSound(animal: Animal) {
  animal.vocalize();
}

makeSound(new Dog());
makeSound(new Cat());
makeSound(new Duck());
