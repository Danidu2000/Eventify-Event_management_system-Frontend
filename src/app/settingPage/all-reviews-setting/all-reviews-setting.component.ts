import { CommonModule, NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastAlertComponentComponent } from "../../alert/toast-alert-component/toast-alert-component.component";
import { ToastService } from '../../services/toast.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-all-reviews-setting',
  standalone: true,
  imports: [FormsModule, CommonModule, NgFor, ToastAlertComponentComponent],
  templateUrl: './all-reviews-setting.component.html',
  styleUrl: './all-reviews-setting.component.css'
})
export class AllReviewsSettingComponent implements OnInit{
  public reviewList: any[] = [];    // Explicitly define as an array
  public tempReview: any = {};      // Initialize as an empty object

  constructor(
    private router: Router,
    private http: HttpClient,
    private toastService: ToastService,
    private location: Location
  ) {}
  ngOnInit(): void {
    this.loadReviews();
  }

  loadReviews() {
    this.http.get<any[]>('http://localhost:8080/review/get-all')
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
        this.toastService.triggerAlertSuccess('Review deleted successfully!');
        this.loadReviews();
      },(error) => {
        this.toastService.triggerAlertWarning('An error occurred while deleting the review. Please try again.');
        console.error('Error occurred while deleting review:', error);
      }
    );
  }

  updateReview(review: any) {
    this.tempReview = { ...review };
  }

  saveReview() {
    this.http.put(`http://localhost:8080/review/update-review`, this.tempReview)
      .subscribe(() => {
        this.toastService.triggerAlertSuccess('Review updated successfully!');
        this.loadReviews();
      },(error) => {
        this.toastService.triggerAlertWarning('An error occurred while updating the review. Please try again.');
        console.error('Error occurred while updating review:', error);
      }
    );
  }

  navigateBack() {
    this.location.back(); // Navigate to the previous page
  }
}
