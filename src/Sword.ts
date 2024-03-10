import { Weapon } from "./Weapon";

export class Sword extends Weapon {
  static MAX_AMOUNT_OF_PERCENT = 25;
  private maxDamageModifier: number;
  constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
    super("sword", baseDamage, baseDurability, value, weight);
    this.maxDamageModifier = (baseDamage * Sword.MAX_AMOUNT_OF_PERCENT) / 100;
  }

  public polish(): void {
    const damageModifier = this.damageModifier + Weapon.MODIFIER_CHANGE_RATE;
    if (damageModifier >= this.maxDamageModifier) {
      this.damageModifier = this.maxDamageModifier;
    } else {
      this.damageModifier = damageModifier;
    }
  }
}
