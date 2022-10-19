import {
  FighterAtack,
  FighterLifePoints,
  FighterReceiveDamage,
  FighterStrength,
} from './Fighter';

export default interface SimpleFighter extends
  FighterLifePoints, FighterStrength, FighterAtack, FighterReceiveDamage { }