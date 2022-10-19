import { EnergyType } from '../Energy';
import Archetype from './Archetypes';

class Mage extends Archetype {
  private _energyType: 'mana';
  static instances = 0;
  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage.instances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Mage.instances;
  }
}

export default Mage;