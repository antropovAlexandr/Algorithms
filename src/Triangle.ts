import { Shape } from "./Shape";
import { Point } from "./Point";

export class Triangle extends Shape {
  constructor(p1: Point, p2: Point, p3: Point);
  constructor(p1: Point, p2: Point, p3: Point, color?: string, filled?: boolean) {
    super([p1, p2, p3], color, filled);
  }

  public toString(): string {
    const pointsMsq = this.points.map((point, index) => `v${index + 1}=${point.toString()}`).join(",");
    return `Triangle[${pointsMsq}]`;
  }

  private isEquilateral(sides: number[]): boolean {
    const [firstItem, ...array] = sides;
    return array.every((side) => side === firstItem);
  }

  private isIsosceles(sides: number[]): boolean {
    const [firstItem, ...array] = sides;
    return array.some((side) => side === firstItem);
  }
  public getType(): string {
    const [p1, p2, p3] = this.points;
    const side1 = Number(p1.distance(p2).toFixed(2));
    const side2 = Number(p2.distance(p3).toFixed(2));
    const side3 = Number(p3.distance(p1).toFixed(2));

    if (side1 === side2 && side2 === side3) {
      return "equilateral triangle";
    }

    if (side1 === side2 || side2 === side3 || side1 === side3) {
      return "isosceles triangle";
    }

    return "scalene triangle";
  }
}
