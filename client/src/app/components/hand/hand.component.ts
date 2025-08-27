import { Component } from '@angular/core';
import {CardComponent} from '../card/card.component';
import {ICard} from '../../models/card';
import {faker} from '@faker-js/faker/locale/en';

@Component({
  selector: 'app-hand',
  standalone: true,
  imports: [
    CardComponent
  ],
  templateUrl: './hand.component.html',
  styleUrl: './hand.component.css'
})
export class HandComponent {

  cards: ICard[] = this.seedCards(7);

  private seedCards(cardCount: number) {
    const cards : ICard[] = [];
    for (let i = 0; i < cardCount; i++) {
      cards.push({
        img: '',
        rarity: faker.helpers.arrayElement(['common', 'uncommon', 'rare', 'epic', 'legendary']),
        sign: faker.helpers.arrayElement(['rock', 'paper', 'scissors']),
        title: faker.word.adjective() + ' ' + faker.word.noun()
      });
    }
    return cards;
  }


  getCardAngle(index: number) {
    const count = this.cards.length;
    // if odd, center card is 0, then -1, 1, -2, 2, etc
    // if even, center is between two cards, so -0.5, 0
    if (count % 2 === 0) {
      // odd
      return (index - (count / 2) + 0.5) * 5;
    }

    // if (count % 2 === 0) {
    //   return (index - (count / 2)) + 10;
    // }
    return (index - Math.floor(count / 2)) * 5;

  }

  onCardClick(card: ICard) {
    alert(`You clicked on ${card.title} (${card.sign})`);
  }


}
