import { Component, OnInit, signal, inject } from '@angular/core';
import { NavbarComponent } from '@layout/header/navbar.component';
import { FooterComponent } from '@layout/footer/footer.component';
import { BookCardComponent } from '@shared/components/book-card/book-card.component';
import { CartTableComponent } from '@features/cart/components/cart-table/cart-table.component';
import { Book } from '@shared/models';
import { CartService } from '@features/cart/services/cart.service';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    BookCardComponent,
    CartTableComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  books = signal<Book[]>([]);
  cartService = inject(CartService);

  ngOnInit() {
    this.books.set([
      { id: 1, title: 'TypeScript 實戰指南', price: 500 },
      { id: 2, title: 'Angular 架構之美', price: 650 },
      { id: 3, title: 'RxJS 響應式編程', price: 580 },
      { id: 4, title: '前端效能優化', price: 450 },
      { id: 5, title: 'Clean Code 無瑕的程式碼', price: 720 },
    ]);
  }

  handleAddToCart(book: Book) {
    this.cartService.addBook(book);
  }
}
