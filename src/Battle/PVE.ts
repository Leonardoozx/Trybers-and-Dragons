import Character from '../Character';
import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

class PVE extends Battle {
  constructor(
    private _player: Character | Fighter,
    private _monsters:
    Monster[] | Fighter[] | SimpleFighter[] = [new Monster()],
  ) {
    super(_player);
  }

  fight(): number {
    this._monsters.forEach((monster) => {
      this._player.attack(monster);
      monster.attack(this._player);
    });
    return super.fight();
  }
}

export default PVE;