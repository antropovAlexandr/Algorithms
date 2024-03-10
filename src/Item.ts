import { Comparable } from "./Comparable";

export abstract class Item implements Comparable<Item> {
  static idCounter: number = 0;

  private readonly id: number;

  public readonly name: string;

  public value: number;

  public weight: number;

  constructor(name: string, value: number, weight: number) {
    const id = Item.idCounter + 1;
    this.id = id;
    Item.idCounter = id;

    this.name = name;
    this.value = value;
    this.weight = weight;
  }

  static resetIdCounter(): void {
    this.idCounter = 0;
  }

  public compareTo(other: Item): number {
    if (this.value > other.value) {
      return 1;
    }

    if (this.value < other.value) {
      return -1;
    }

    return this.name.localeCompare(other.name, "en", { sensitivity: "base" });
  }

  public toString(): string {
    return `${this.name} - Value: ${this.value.toFixed(2)}, Weight: ${this.weight.toFixed(2)}`;
  }

  public getId(): number {
    return this.id;
  }
}
