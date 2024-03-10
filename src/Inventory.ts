import { Item } from "./Item";
import { ItemComparator } from "./ItemComparator";

export class Inventory {
  private items: Item[] = [];

  public sort(comparator?: ItemComparator): void {
    if (comparator?.compare) {
      this.items.sort(comparator.compare);
    } else {
      this.items.sort((a, b) => a.value - b.value);
    }
  }

  public addItem(item: Item): void {
    this.items.push(item);
  }

  public toString() {
    return this.items.map((item) => item.toString()).join(", ");
  }
}
