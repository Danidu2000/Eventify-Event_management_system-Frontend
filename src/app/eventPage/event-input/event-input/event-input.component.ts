import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-event-input',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './event-input.component.html',
  styleUrl: './event-input.component.css'
})
export class EventInputComponent {
  userId: any;
  navigateTo(path: string) {
    this.router.navigate([path]);
  }
  event = {
    title: '',
    description: '',
    location: '',
    date: '',
    organizer_id: ''
  };
  selectedFile: File | null = null;

  constructor(private http: HttpClient,private router: Router, private authService: AuthService) {}

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }

  onSubmit(): void {
     // Set the organizer_id to the userId from AuthService
     this.event.organizer_id = this.authService.getUserId(); 

    // Check if an image file is selected
    if (!this.selectedFile) {
      alert("Please select an image file.");
      return;
    }

    // Create FormData to combine text data and image file
    const formData = new FormData();
    formData.append('event', new Blob([JSON.stringify(this.event)], { type: 'application/json' }));
    formData.append('image', this.selectedFile);

    // Make the POST request to the backend
    this.http.post('http://localhost:8080/event/add-event', formData).subscribe(
      (response) => {
        alert('Event created successfully');
        console.log(response);
      },
      (error) => {
        alert('Failed to create event');
        console.error(error);
      }
    );
  }
}
