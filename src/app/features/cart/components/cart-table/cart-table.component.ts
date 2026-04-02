import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '@features/cart/services/cart.service';

@Component({
  selector: 'app-cart-table',
  standalone: true,
  imports: [CurrencyPipe],
  template: `
    <div class="cart-container">
      <h3 class="cart-title">🛒 購物車明細</h3>

      @if (cart.cartCount() === 0) {
        <div class="empty-state">購物車目前是空的喔，快去挑選好書吧！</div>
      } @else {
        <table class="cart-table">
          <thead>
            <tr>
              <th style="text-align: left;">商品名稱</th>
              <th style="text-align: right;">單價</th>
              <th style="text-align: center; width: 60px;">操作</th>
            </tr>
          </thead>
          <tbody>
            @for (item of cart.cartItems(); track $index; let i = $index) {
              <tr>
                <td>{{ item.title }}</td>
                <td style="text-align: right;">{{ item.price | currency:'TWD':'symbol':'1.0-0' }}</td>
                <td style="text-align: center;">
                  <button class="btn-delete" (click)="cart.removeItem(i)" title="移除商品">🗑️</button>
                </td>
              </tr>
            }
          </tbody>
          <tfoot>
            <tr class="total-row">
              <td colspan="2">總計</td>
              <td style="text-align: right; color: #e67e22;">
                {{ cart.cartTotal() | currency:'TWD':'symbol':'1.0-0' }}
              </td>
            </tr>
          </tfoot>
        </table>
      }
    </div>
  `,
  styles: `
    .cart-container { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
    .cart-title { margin-top: 0; border-bottom: 2px solid #3498db; padding-bottom: 10px; color: #2c3e50; }
    .empty-state { text-align: center; color: #7f8c8d; padding: 20px; font-style: italic; }
    .cart-table { width: 100%; border-collapse: collapse; margin-top: 10px; }
    .cart-table th, .cart-table td { padding: 12px; border-bottom: 1px solid #eee; }
    .cart-table th { background: #f8f9fa; color: #333; }
    .total-row { font-weight: bold; font-size: 1.2rem; background: #fdfefe; }
    .btn-delete {
      background: transparent;
      border: none;
      cursor: pointer;
      font-size: 1.2rem;
      transition: transform 0.2s;
    }
    .btn-delete:hover {
      transform: scale(1.2);
    }
  `,
})
export class CartTableComponent {
  cart = inject(CartService);
}
