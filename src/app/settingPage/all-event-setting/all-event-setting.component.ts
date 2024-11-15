import { CommonModule, NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastAlertComponentComponent } from "../../alert/toast-alert-component/toast-alert-component.component";
import { ToastService } from '../../services/toast.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-all-event-setting',
  standalone: true,
  imports: [FormsModule, CommonModule, NgFor, ToastAlertComponentComponent],
  templateUrl: './all-event-setting.component.html',
  styleUrl: './all-event-setting.component.css'
})
export class AllEventSettingComponent implements OnInit {
  public eventList: any[] = [];    // Explicitly define as an array
  public tempEvent: any = {};      // Initialize as an empty object

  constructor(
    private router: Router,
    private http: HttpClient,
    private toastService: ToastService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents() {
    this.http.get<any[]>(`http://localhost:8080/event/get-all`)
      .subscribe(
        (data) => {
          this.eventList = data;
        },
        (error) => {
          console.error('Error loading events:', error);
        }
      );
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  deleteEventById(id: any) {
    this.http.delete(`http://localhost:8080/event/delete-by-id/${id}`)
      .subscribe(() => {
        this.toastService.triggerAlertSuccess('Event deleted successfully!');
        this.loadEvents();
      },(error) => {
        this.toastService.triggerAlertWarning('An error occurred while deleting the event. Please try again.');
        console.error('Error occurred while deleting event:', error);
      }
    );
  }

  updateEvent(event: any) {
    this.tempEvent = { ...event };
  }

  saveEvent() {
    this.http.put(`http://localhost:8080/event/update-event`, this.tempEvent)
      .subscribe(() => {
        this.toastService.triggerAlertSuccess('Event updated successfully');
        this.loadEvents();
      },(error) => {
        this.toastService.triggerAlertWarning('An error occurred while updating the event. Please try again.');
        console.error('Error occurred while updating event:', error);
      }
    );
  }

  navigateBack() {
    this.location.back(); // Navigate to the previous page
  }
}

