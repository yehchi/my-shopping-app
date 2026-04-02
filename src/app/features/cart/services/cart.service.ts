import { Injectable, signal, computed } from '@angular/core';
import { Book } from '@shared/models';

@Injectable({ providedIn: 'root' })
export class CartService {
  cartItems = signal<Book[]>([]);

  cartCount = computed(() => this.cartItems().length);
  cartTotal = computed(() =>
    this.cartItems().reduce((sum, item) => sum + item.price, 0)
  );

  addBook(book: Book) {
    this.cartItems.update((items) => [...items, book]);
  }

  removeItem(index: number) {
    this.cartItems.update((items) => items.filter((_, i) => i !== index));
  }
}
