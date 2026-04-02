import { Component, input, output, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Book } from '@shared/models';
import { AuthService } from '@core/auth/auth.service';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [CurrencyPipe],
  template: `
    <div class="card">
      <div class="card-info">
        <h3 class="title">{{ bookData().title }}</h3>
        <p class="price">{{ bookData().price | currency:'TWD':'symbol':'1.0-0' }}</p>
      </div>
      <button
        class="btn-add"
        [disabled]="!auth.isLoggedIn()"
        (click)="onAdd()">
        加入購物車
      </button>
    </div>
  `,
  styles: `
    .card { border: 1px solid #e0e0e0; border-radius: 8px; padding: 16px; display: flex; flex-direction: column; justify-content: space-between; background: white; box-shadow: 0 2px 5px rgba(0,0,0,0.05); }
    .title { margin: 0 0 8px 0; font-size: 1.1rem; color: #333; }
    .price { margin: 0 0 16px 0; color: #e67e22; font-weight: bold; font-size: 1.2rem; }
    .btn-add { background: #27ae60; color: white; border: none; padding: 10px; border-radius: 4px; cursor: pointer; font-weight: bold; width: 100%; transition: background 0.2s; }
    .btn-add:hover:not(:disabled) { background: #2ecc71; }
    .btn-add:disabled { background: #bdc3c7; cursor: not-allowed; }
  `,
})
export class BookCardComponent {
  bookData = input.required<Book>();
  addToCart = output<Book>();
  auth = inject(AuthService);

  onAdd() {
    this.addToCart.emit(this.bookData());
  }
}
