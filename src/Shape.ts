import { Point } from "./Point";

const MIN_COUNT_POINTS = 3;

export abstract class Shape {
  protected color: string;

  protected filled: boolean;

  protected points: Point[];

  constructor(points: Point[], color?: string, filled?: boolean) {
    this.points = points;
    this.color = color || "green";
    this.filled = filled !== undefined ? filled : true;

    if (this.points.length < MIN_COUNT_POINTS) {
      throw new Error("Invalid points field");
    }
  }
  public toString(): string {
    const filled = this.filled ? "filled" : "not filled";
    const points = this.points.map((point) => point.toString()).join(", ");
    return `A Shape with color of ${this.color} and ${filled}. Points: ${points}.`;
  }

  public getPerimeter(): number {
    const lastIndex = this.points.length - 1;
    return this.points
      .map((point, index, array) => {
        const nextPoint = index === lastIndex ? array[0] : array[index + 1];
        return point.distance(nextPoint.x, nextPoint.y);
      })
      .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  }
}
