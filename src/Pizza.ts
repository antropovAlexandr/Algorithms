import { Consumable } from "./Consumable";

export class Pizza extends Consumable {
  readonly numberOfSlices: number;

  private numberOfEatenSlices: number = 0;

  constructor(value: number, weight: number, isSpoiled: boolean, numberOfSlices: number) {
    super("pizza", value, weight, isSpoiled);
    this.numberOfSlices = numberOfSlices;
    this.isConsumed = numberOfSlices <= 0;
  }

  public getNumberOfEatenSlices(): number {
    return this.numberOfEatenSlices;
  }

  public use(): string {
    if (this.isConsumed) {
      return `There's nothing left of the ${this.name} to consume.`;
    }

    this.numberOfEatenSlices += 1;
    if (this.numberOfSlices >= this.numberOfEatenSlices) {
      this.isConsumed = true;
    }
    return `You consumed a slice of the ${this.name}.`;
  }
}
