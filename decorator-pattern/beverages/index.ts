import { Beverage } from "./beverage";

export class Espresso extends Beverage {
  constructor() {
    super();
    this.description = "Espresso";
  }

  cost(): number {
    const size = this.getSize();
    if (size === this.sizes.TALL) {
      return 1;
    }
    if (size === this.sizes.GRANDE) {
      return 2;
    }
    return 3;
  }
}
export class HouseBlend extends Beverage {
  constructor() {
    super();
    this.description = "House Blend Coffee";
  }

  cost(): number {
    const size = this.getSize();
    if (size === this.sizes.TALL) {
      return 5;
    }
    if (size === this.sizes.GRANDE) {
      return 6;
    }
    return 7;
  }
}

export class DarkRoast extends Beverage {
  constructor() {
    super();
    this.description = "Dark Roast coffee";
  }

  cost(): number {
    const size = this.getSize();
    if (size === this.sizes.TALL) {
      return 8;
    }
    if (size === this.sizes.GRANDE) {
      return 9;
    }
    return 10;
  }
}

export class Decaf extends Beverage {
  constructor() {
    super();
    this.description = "Decaf coffee";
  }

  cost(): number {
    const size = this.getSize();
    if (size === this.sizes.TALL) {
      return 5;
    }
    if (size === this.sizes.GRANDE) {
      return 10;
    }
    return 15;
  }
}
