//클래스를 상속하는 방식보다 컴포지션하는 방식을 추천
interface Bird {
  canFly(): boolean;
  hasBeak(): boolean;
}

class CommonBird implements Bird {
  canFly(): boolean {
    return false;
  }
  hasBeak(): boolean {
    return true;
  }
}

//일반적인 상속 관계
class Duck extends CommonBird {}

class Penguin implements Bird {
  private commonBird: CommonBird;
  constructor() {
    this.commonBird = new CommonBird();
  }
  canFly(): boolean {
    return this.commonBird.canFly();
  }
  hasBeak(): boolean {
    return this.commonBird.hasBeak();
  }
}

export function compositionTest() {
  const duck = new Duck();
  const penguin = new Penguin();
  console.log('duck can fly?', duck.canFly());
  console.log('duck has beak?', duck.hasBeak());
  console.log('penguin can fly?', penguin.canFly());
  console.log('penguin has beak?', penguin.hasBeak());
}
