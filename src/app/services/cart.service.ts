import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  private cart: { type: string; price: number }[] = [];

  getCart() {
    return this.cart;
  }

  addTicket(ticket: { type: string; price: number }) {
    this.cart.push(ticket);
  }

  getTotal() {
    return this.cart.reduce((total, ticket) => total + ticket.price, 0);
  }

  clearCart() {
    this.cart = [];
  }
}
