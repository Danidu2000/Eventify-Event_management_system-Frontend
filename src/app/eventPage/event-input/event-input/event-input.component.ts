import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { ToastService } from '../../../services/toast.service';
import { ToastAlertComponentComponent } from "../../../alert/toast-alert-component/toast-alert-component.component";
import { Location } from '@angular/common';

@Component({
  selector: 'app-event-input',
  standalone: true,
  imports: [FormsModule, CommonModule, ToastAlertComponentComponent],
  templateUrl: './event-input.component.html',
  styleUrl: './event-input.component.css'
})
export class EventInputComponent {
  userId: any;
  eventId: any;
  navigateTo(path: string) {
    this.router.navigate([path]);
  }
  event = {
    title: '',
    description: '',
    location: '',
    date: '',
    time: '',
    organizerId: ''
  };
  selectedFile: File | null = null;

  constructor(private http: HttpClient, private router: Router, private authService: AuthService, private toastService: ToastService, private location: Location) { }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }

  onSubmit(): void {
    // Set the organizer_id to the userId from AuthService
    this.event.organizerId = this.authService.getUserId();

    // Check if all required fields are filled
    if (!this.event.title || !this.event.description || !this.event.location || !this.event.date || !this.event.time) {
      this.toastService.triggerAlertMessage('Please fill in all required fields.');
      return;
    }

    // Check if an image file is selected
    if (!this.selectedFile) {
      this.toastService.triggerAlertMessage("Please select an image file.");
      return;
    }

    // Create FormData to combine text data and image file
    const formData = new FormData();
    formData.append('event', new Blob([JSON.stringify(this.event)], { type: 'application/json' }));
    formData.append('image', this.selectedFile);

    // Make the POST request to the backend
    this.http.post('http://localhost:8080/event/add-event', formData).subscribe(
      (response) => {
        this.eventId = response;
        this.toastService.triggerAlertSuccess('Event created successfully');
        this.toastService.triggerAlertMessage('Please add tickets');
      },
      (error) => {
        this.toastService.triggerAlertWarning('Failed to create event');
        console.error(error);
      }
    );
  }

  Ticket: any = {
    price: '',
    status: '',
    organizerId: '',
    eventId: ''
  };

  AddTicket(status: string, price: any) {
    // Ensure the price is a valid number
    if (price <= 0) {
      this.toastService.triggerAlertMessage('Please enter a valid price.');
      return;
    }
  
    // Set the values of the Ticket object
    this.Ticket.price = price;
    this.Ticket.status = status;
    this.Ticket.organizerId = this.authService.getUserId();
    this.Ticket.eventId = this.eventId;
  
    // Make the POST request to add the ticket
    this.http.post('http://localhost:8080/ticket/add-ticket', this.Ticket).subscribe(
      (response) => {
        this.toastService.triggerAlertSuccess('Ticket added successfully');
      },
      (error) => {
        this.toastService.triggerAlertWarning('Failed to add ticket');
        console.error(error);
      }
    );
  }

  navigateBack() {
    this.location.back(); // Navigate to the previous page
  }
}
