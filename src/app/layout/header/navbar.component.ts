import { Component, inject } from '@angular/core';
import { AuthService } from '@core/auth/auth.service';
import { CartService } from '@features/cart/services/cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <nav class="navbar">
      <h2>📚 書店</h2>
      <div class="actions">
        @if (auth.isLoggedIn()) {
          <button class="btn logout" (click)="auth.toggleLogin()">登出</button>
          <div class="cart-icon">
            🛒 <span class="badge">{{ cart.cartCount() }}</span>
          </div>
        } @else {
          <button class="btn login" (click)="auth.toggleLogin()">登入</button>
        }
      </div>
    </nav>
  `,
  styles: `
    .navbar { display: flex; justify-content: space-between; align-items: center; padding: 1rem 2rem; background: #2c3e50; color: white; }
    h2 { margin: 0; }
    .actions { display: flex; gap: 1rem; align-items: center; }
    .btn { padding: 8px 16px; border: none; border-radius: 4px; cursor: pointer; font-weight: bold; }
    .login { background: #3498db; color: white; }
    .logout { background: #e74c3c; color: white; }
    .cart-icon { position: relative; font-size: 1.5rem; cursor: pointer; }
    .badge { position: absolute; top: -8px; right: -12px; background: #e74c3c; color: white; font-size: 0.8rem; padding: 2px 6px; border-radius: 50%; font-weight: bold; }
  `,
})
export class NavbarComponent {
  auth = inject(AuthService);
  cart = inject(CartService);
}
