import { Item } from "./Item";

export abstract class Consumable extends Item {
  public isConsumed: boolean = false;

  private _isSpoiled: boolean;

  constructor(name: string, value: number, weight: number, isSpoiled: boolean) {
    super(name, value, weight);
    this._isSpoiled = isSpoiled;
  }

  public use(): string {
    if (this.isConsumed) {
      return `There's nothing left of the ${this.name} to consume.`;
    }

    let message = `You consumed the ${this.name}.`;

    if (this._isSpoiled) {
      message += "\nYou feel sick.";
    }
    return message;
  }

  public isSpoiled(): boolean {
    return this._isSpoiled;
  }
}
