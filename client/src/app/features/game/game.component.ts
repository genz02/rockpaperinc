import { Component } from '@angular/core';
import {CardComponent} from '../../components/card/card.component';
import {ICard} from '../../models/card';
import {faker} from '@faker-js/faker/locale/en';
import {th} from '@faker-js/faker';
import {NgStyle} from '@angular/common';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
    CardComponent,
    NgStyle,
    MatButton
  ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css',
})
export class GameComponent {

}
