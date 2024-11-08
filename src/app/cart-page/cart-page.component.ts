import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [NgFor],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent {
  constructor(private cartService: CartService) {}

  get cartItems() {
    return this.cartService.getCart();
  }

  get total() {
    return this.cartService.getTotal();
  }

  clearCart() {
    this.cartService.clearCart();
    alert('Thank you for your purchase!');
  }
}
