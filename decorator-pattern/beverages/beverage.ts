// this is the class that we want to extend using decorators
export enum Sizes {
  "TALL",
  "GRANDE",
  "VENTI",
}
export abstract class Beverage {
  description: string = "Unknown Beverage";
  sizes = Sizes;
  size: Sizes = Sizes.TALL;

  getDescription(): string {
    return this.description;
  }

  setSize(size: Sizes) {
    this.size = size;
  }

  getSize(): Sizes {
    return this.size;
  }
  abstract cost(): number;
}
