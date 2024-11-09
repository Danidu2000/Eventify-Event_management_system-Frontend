import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-review-setting-form',
  standalone: true,
  imports: [FormsModule, CommonModule, NgFor],
  templateUrl: './review-setting-form.component.html',
  styleUrls: ['./review-setting-form.component.css']
})
export class ReviewSettingFormComponent implements OnInit {
  public reviewList: any[] = [];    // Explicitly define as an array
  public tempReview: any = {};      // Initialize as an empty object

  constructor(
    private router: Router,
    private authService: AuthService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.loadReviews();
  }

  loadReviews() {
    const id = this.authService.getUserId();
    this.http.get<any[]>(`http://localhost:8080/review/get-list-by-user_id/${id}`)
      .subscribe(
        (data) => {
          this.reviewList = data;
        },
        (error) => {
          console.error('Error loading reviews:', error);
        }
      );
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  deleteReviewById(id: any) {
    this.http.delete(`http://localhost:8080/review/delete-by-id/${id}`)
      .subscribe(() => {
        alert('Review deleted successfully');
        this.loadReviews();
      });
  }

  updateReview(review: any) {
    this.tempReview = { ...review };
  }

  saveReview() {
    this.http.put(`http://localhost:8080/review/update-review`, this.tempReview)
      .subscribe(() => {
        alert('Review updated successfully');
        this.loadReviews();
      });
  }
}
