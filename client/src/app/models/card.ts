export interface ICard {
  title: string;
  sign: 'rock' | 'paper' | 'scissors';
  img: string;
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
}
