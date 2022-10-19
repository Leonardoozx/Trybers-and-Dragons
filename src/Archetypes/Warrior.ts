import { EnergyType } from '../Energy';
import Archetype from './Archetypes';

class Warrior extends Archetype {
  private _energyType: 'stamina';
  static instances = 0;
  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior.instances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Warrior.instances;
  }
}

export default Warrior;