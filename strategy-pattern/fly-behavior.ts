export interface FlyBehavior {
  fly: () => void;
}

export class FlyWithWings implements FlyBehavior {
  fly(): void {
    console.log("I am flying 💸");
  }
}

export class FlyNoWay implements FlyBehavior {
  fly(): void {
    console.log("I can't fly 😭");
  }
}

export class FlyRocketPowered implements FlyBehavior {
  fly(): void {
    console.log("I am flying with rocket 🚀");
  }
}
