import Energy from '../Energy';

export interface FighterLifePoints {
  lifePoints: number;
}

export interface FighterStrength {
  strength: number;
}

export interface FighterDefense {
  defense: number;
}

export interface FighterEnergy {
  energy?: Energy
}

export interface FighterAtack {
  attack(enemy: FighterLifePoints
  & FighterStrength & FighterAtack & FighterReceiveDamage): void;
}

export interface FighterSpecial {
  special?(enemy: FighterLifePoints
  & FighterStrength & FighterAtack & FighterReceiveDamage): void;
}

export interface FighterLevelUp {
  levelUp(): void;
}

export interface FighterReceiveDamage {
  receiveDamage(atackPoints: number): number;
}

export default interface Fighter extends
  FighterLifePoints, FighterStrength, FighterDefense,
  FighterEnergy, FighterAtack, FighterSpecial,
  FighterLevelUp, FighterReceiveDamage { }