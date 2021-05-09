// this decorator extends the functionality of objects of type Beverage.
// This should have the exact type of Beverage so we extend it from Beverage
// But it should have different behavior so make every method inherited from Beverage abstract

import { Beverage, Sizes } from "../beverages/beverage";

export abstract class CondimentDecorator extends Beverage {
  abstract getDescription(): string;
  beverage!: Beverage;

  getSize(): Sizes {
    return this.beverage.getSize();
  }
}
