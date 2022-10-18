import Race from './Race';

class Dwarf extends Race {
  static count = 0;
  private _maxLifePoints: number;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf.count += 1;
    this._maxLifePoints = 80;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Dwarf.count;
  }

  get name(): string {
    return this.name;
  }

  get dexterity(): number {
    return this.dexterity;
  }
}

export default Dwarf;
