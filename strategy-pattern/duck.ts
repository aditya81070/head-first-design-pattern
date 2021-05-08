import { FlyBehavior, FlyNoWay, FlyWithWings } from "./fly-behavior";
import { QuackBehavior, Quack } from "./quack-behavior";

export abstract class Duck {
  // implementing to an interface or super type instead of concrete class
  flyBehavior!: FlyBehavior;
  quackBehavior!: QuackBehavior;

  constructor() {}

  // setter to change the fly behavior at run time
  setFlyBehavior(fb: FlyBehavior): void {
    this.flyBehavior = fb;
  }

  // setter to change the quack behavior at run time
  setQuackBehavior(qb: QuackBehavior): void {
    this.quackBehavior = qb;
  }
  // delegating behavior to FlyBehavior and decide what is the type of fly at runtime
  performFly(): void {
    this.flyBehavior.fly();
  }

  // delegating behavior to QuackBehavior and decide what is the type of quack at runtime
  performQuack(): void {
    this.quackBehavior.quack();
  }

  // common function for all type of Duck
  swim(): void {
    console.log("I am swimming 🏊");
  }
}

export class MallardDuck extends Duck {
  constructor() {
    super();
    // defining quack behavior in particular type of duck. Code reuse + flexibility to change behavior at runtime
    // TODO: still we are implementing to concrete type Quack and FlyWithWings here
    this.quackBehavior = new Quack();
    this.flyBehavior = new FlyWithWings();
  }

  display(): void {
    console.log("I am real Mallard Duck");
  }
}

export class ModelDuck extends Duck {
  constructor() {
    super();
    // defining quack behavior in particular type of duck. Code reuse + flexibility to change behavior at runtime
    // TODO: still we are implementing to concrete type Quack and FlyWithWings here
    this.quackBehavior = new Quack();
    this.flyBehavior = new FlyNoWay();
  }

  display(): void {
    console.log("I am a Model Duck");
  }
}
