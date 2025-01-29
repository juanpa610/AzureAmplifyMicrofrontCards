import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface Card {
  id: string;
  cardNumber: string;
}
@Component({
  standalone: false,
  selector: 'app-mfe1',
  templateUrl: './mfe1.component.html',
  styleUrl: './mfe1.component.scss'
})
export class Mfe1Component {
  cards: Card[] = [];

  cardForm = new FormGroup({
    cardNumber: new FormControl('', [Validators.required, Validators.minLength(12)]),
  });

  constructor() {}

  addCard(): void {
    if (this.cardForm.valid) {
      const newCard: Card = {
        id: crypto.randomUUID(),
        cardNumber: this.cardForm.value.cardNumber!,
      };
      this.cards.push(newCard);
      this.cardForm.reset();
    }

    console.log(this.cards);
  }
}
