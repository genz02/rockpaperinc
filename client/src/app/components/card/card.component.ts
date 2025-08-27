import {Component, ElementRef, EventEmitter, inject, Input, Output, Renderer2, ViewChild} from '@angular/core';
import {ICard} from '../../models/card';
import {NgOptimizedImage} from '@angular/common';



@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @ViewChild('cardElement') cardElement!: ElementRef;
  @Input() hidden = false;
  @Input() flippable = true;
  @Input() angle = 0;
  @Input() card: ICard | null = null;
  @Output() cardPicked = new EventEmitter<ICard>();

  labels = {
    'rock': 'Rock',
    'paper': 'Paper',
    'scissors': 'Scissors'
  }

  #renderer = inject(Renderer2);

  ngOnInit() {
    // const cardElement = document.getElementsByClassName('card')[0] as HTMLElement;


    // document.getElementsByClassName('card')[0].
  }

  ngAfterViewInit() {
    if (this.cardElement) {
      console.log(this.cardElement);
      console.log(this.angle);

      try {
        console.log(-1 * Math.abs(this.angle));
        this.#renderer.setStyle(this.cardElement.nativeElement, 'transform', `rotate(${this.angle}deg) translateY(${Math.abs(this.angle) * 2}px)`);
        // this.#renderer.setStyle(this.cardElement.nativeElement, 'transform', ``);
      }
      catch (e) {
        console.error(e);
      }
    }
  }

}
