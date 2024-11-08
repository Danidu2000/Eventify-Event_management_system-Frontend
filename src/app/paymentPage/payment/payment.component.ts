import { Component, Input } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule, formatDate, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [FormsModule, CommonModule, NgFor],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
  @Input() method: string = '';
  amount: number;
  date: string = formatDate(new Date(), 'yyyy-MM-dd', 'en');
  userId: number;

  constructor(private cartService: CartService, private authService: AuthService, private http: HttpClient) {
    this.amount = this.cartService.getTotal();
    this.userId = this.authService.getUserId();
  }

  // Computed property for cart items
  get cartItems() {
    return this.cartService.getCart();
  }

  // Computed property for total amount
  get total() {
    return this.cartService.getTotal();
  }

  // Print the bill
  printBill() {
    window.print();
  }

  // Method to process payment
  processPayment() {
    const paymentData = {
      method: this.method,
      amount: this.total,
      date: this.date,
      userId: this.userId
    };

    this.http.post('http://localhost:8080/payment/add-payment', paymentData).subscribe(
      (data) => {
        alert('Payment processed successfully!');
        console.log('Payment Data:', paymentData);
      },
      (error) => {
        console.error('Error processing payment:', error);
        alert('Error processing payment. Please try again.');
      }
    );
  }

  ngOnDestroy() {
    this.cartService.clearCart();
    alert('Cart cleared!');
  }
}
