import { Weapon } from "./Weapon";

export class Bow extends Weapon {
  constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
    super("bow", baseDamage, baseDurability, value, weight);
  }

  polish(): void {
    const durabilityModifier = this.durabilityModifier + Weapon.MODIFIER_CHANGE_RATE;
    const effectiveDurability = this.getEffectiveDurability(durabilityModifier);
    if (effectiveDurability <= 1) {
      this.durabilityModifier = durabilityModifier;
    }
  }
}
