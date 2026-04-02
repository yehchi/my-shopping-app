import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div class="footer-bottom">
        <p>&copy; 2026 書店. All rights reserved.</p>
      </div>
    </footer>
  `,
  styles: `
    .footer {
      background-color: #2c3e50;
      color: #ecf0f1;
      margin-top: 40px;
    }
    .footer-bottom {
      background-color: #1a252f;
      text-align: center;
      padding: 15px 0;
      margin-top: 20px;
    }
    .footer-bottom p {
      margin: 0;
      font-size: 0.9em;
      color: #7f8c8d;
    }
  `,
})
export class FooterComponent {}
