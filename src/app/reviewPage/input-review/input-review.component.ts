import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Ensure FormsModule is imported
import { EventService } from '../../services/event.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastAlertComponentComponent } from "../../alert/toast-alert-component/toast-alert-component.component";
import { ToastService } from '../../services/toast.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-input-review',
  standalone: true,
  imports: [FormsModule, CommonModule, ToastAlertComponentComponent],
  templateUrl: './input-review.component.html',
  styleUrls: ['./input-review.component.css']
})
export class InputReviewComponent implements OnInit {
  public review: any = {
    comment: '', // Start with an empty string for the comment
    rating: null, // Initially set to null for validation
    date: new Date().toISOString().split('T')[0], // Default to today's date
    userId: '',
    eventId: ''
  };

  constructor(
    private router: Router,
    private eventService: EventService,
    private authService: AuthService,
    private http: HttpClient,
    private toastService: ToastService,
    private location: Location
  ) {}

  ngOnInit(): void {
    // Fetch user ID and event ID
    this.review.userId = this.authService.getUserId() || '';
    this.review.eventId = this.eventService.getEventId() || '';
  }

  onSubmit() {
    // Validate all fields
    if (!this.review.comment.trim()) {
      this.toastService.triggerAlertMessage('Please enter a comment.');
      return;
    }
    if (this.review.rating < 1 || this.review.rating > 5) {
      this.toastService.triggerAlertMessage('Please provide a valid rating between 1 and 5.');
      return;
    }
    if (!this.review.date) {
      this.toastService.triggerAlertMessage('Please select a date.');
      return;
    }

    // If all fields are valid, submit the review
    console.log(this.review);
    this.http.post('http://localhost:8080/review/add-review', this.review)
      .subscribe(
        (response) => {
          this.toastService.triggerAlertSuccess('Review Added Successfully!');
        },
        (error) => {
          this.toastService.triggerAlertWarning('Failed to add review. Please try again.');
          console.error('Error adding review:', error);
        }
      );
  }

  navigateBack() {
    this.location.back(); // Navigate to the previous page
  }
}
