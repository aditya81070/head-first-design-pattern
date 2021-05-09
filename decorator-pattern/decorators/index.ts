import { Beverage, Sizes } from "../beverages/beverage";
import { CondimentDecorator } from "./condiment-decorator";

export class Mocha extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  getDescription(): string {
    return this.beverage.getDescription() + ", Mocha";
  }

  cost(): number {
    let cost: number = 0;
    const size = this.beverage.getSize();
    if (size === this.sizes.TALL) {
      cost = 0.89;
    }
    if (size === this.sizes.GRANDE) {
      cost = 0.99;
    }
    cost = 1.1;
    return cost + this.beverage.cost();
  }
}

export class Soy extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  getDescription(): string {
    return this.beverage.getDescription() + ", Soy";
  }

  cost(): number {
    let cost: number = 0;
    const size = this.beverage.getSize();
    if (size === this.sizes.TALL) {
      cost = 0.89;
    }
    if (size === this.sizes.GRANDE) {
      cost = 0.99;
    }
    cost = 1.1;
    return cost + this.beverage.cost();
  }
}

export class Whip extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
    this.size = beverage.getSize();
  }

  getDescription(): string {
    return this.beverage.getDescription() + ", Whip";
  }

  cost(): number {
    let cost: number = 0;
    const size = this.beverage.getSize();
    if (size === this.sizes.TALL) {
      cost = 0.89;
    }
    if (size === this.sizes.GRANDE) {
      cost = 0.99;
    }
    cost = 1.1;
    return cost + this.beverage.cost();
  }
}
