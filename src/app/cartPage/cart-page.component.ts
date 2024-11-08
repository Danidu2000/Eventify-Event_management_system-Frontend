import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent {
  constructor(private cartService: CartService, private router: Router) {}

  get cartItems() {
    return this.cartService.getCart();
  }

  get total() {
    return this.cartService.getTotal();
  }

  navigateToPayment() {
    this.router.navigate(['/payment']);
  }

  removeFromCart(index: number): void {
    this.cartService.removeItem(index);
  }
}
