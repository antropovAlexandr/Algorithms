type Coordinate = {
  x: number;
  y: number;
};

export class Point {
  public x: number;

  public y: number;

  constructor(x?: number, y?: number) {
    this.x = x || 0;
    this.y = y || 0;
  }

  private getDistanceValue(p1: Coordinate, p2: Coordinate): number {
    return Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2);
  }

  public toString(): string {
    return `(${this.x}, ${this.y})`;
  }

  public distance(): number;
  public distance(x?: Point): number;
  public distance(x?: number, y?: number): number;
  public distance(x?: unknown, y?: number): number {
    const p1: Coordinate = { x: this.x, y: this.y };
    let p2: Coordinate = { x: 0, y: 0 };
    if (x instanceof Point) {
      p2 = { x: x.x, y: x.y };
    } else if (typeof x === "number" && y) {
      p2 = { x, y };
    }

    return this.getDistanceValue(p1, p2);
  }
}
