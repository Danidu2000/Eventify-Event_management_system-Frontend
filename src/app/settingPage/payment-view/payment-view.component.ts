import { CommonModule, NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-view',
  standalone: true,
  imports: [NgFor,FormsModule,CommonModule],
  templateUrl: './payment-view.component.html',
  styleUrl: './payment-view.component.css'
})
export class PaymentViewComponent implements OnInit{
  constructor(private router: Router,private htt: HttpClient) {}
  ngOnInit(): void {
    this.loadPayments();
  }
  navigateTo(path: string) {
    this.router.navigate([path]);
  }
public paymentList: any = []
  loadPayments() {
    this.htt.get('http://localhost:8080/payment/get-all').subscribe((res) => {
      this.paymentList = res;
    });
  }
}
