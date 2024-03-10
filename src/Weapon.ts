import { Item } from "./Item";

export abstract class Weapon extends Item {
  static MODIFIER_CHANGE_RATE: number = 0.05;

  protected baseDamage: number;

  protected damageModifier: number = 0;

  private baseDurability: number;

  protected durabilityModifier: number = 0;

  private isBroken: boolean = false;

  constructor(name: string, baseDamage: number, baseDurability: number, value: number, weight: number) {
    super(name, value, weight);
    this.baseDamage = baseDamage;
    this.baseDurability = baseDurability;
  }

  public getEffectiveDamage(): number {
    return this.baseDamage + this.damageModifier;
  }

  public getEffectiveDurability(durabilityModifier?: number): number {
    return this.baseDurability + (durabilityModifier || this.durabilityModifier);
  }

  public toString(): string {
    const durability = (100 * this.getEffectiveDurability()).toFixed(2);
    return `${super.toString()}, Damage: ${this.getEffectiveDamage().toFixed(2)}, Durability: ${durability}%`;
  }

  abstract polish(): void;

  public use(): string {
    if (this.isBroken) {
      return `You can't use the ${this.name}, it is broken.`;
    }
    this.durabilityModifier -= Weapon.MODIFIER_CHANGE_RATE;
    const effectiveDurability = this.getEffectiveDurability();
    const message = `You use the ${this.name}, dealing ${Weapon.MODIFIER_CHANGE_RATE} points of damage.`;
    if (effectiveDurability <= 0) {
      this.isBroken = true;
      return `${message}\nThe ${this.name} breaks.`;
    }
    return message;
  }
}
