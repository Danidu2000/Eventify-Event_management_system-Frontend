import { CommonModule, NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastAlertComponentComponent } from "../../alert/toast-alert-component/toast-alert-component.component";
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-event-setting-form',
  standalone: true,
  imports: [NgFor, CommonModule, FormsModule, ToastAlertComponentComponent],
  templateUrl: './event-setting-form.component.html',
  styleUrl: './event-setting-form.component.css'
})
export class EventSettingFormComponent implements OnInit {
  constructor(private http: HttpClient, private authService: AuthService, private router: Router, private toastService: ToastService) { }

  ngOnInit(): void {
    this.loadEvents();
  }
  public eventList: any;

  loadEvents() {
    let id = this.authService.getUserId();
    fetch(`http://localhost:8080/event/get-list-by-organizer_id/${id}`)
      .then(data => data.json())
      .then(event => this.eventList = event);
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  deleteEventById(id: any) {
    this.http.delete(`http://localhost:8080/event/delete-by-id/${id}`)
      .subscribe((data) => {
        this.toastService.triggerAlertSuccess('Event deleted successfully!');
        this.loadEvents();
      },
      (error) => {
        this.toastService.triggerAlertWarning('An error occurred while deleting the event. Please try again.');
        console.error('Error occurred while deleting event:', error);
      });
  }

  public tempEvent: any = {}
  updateEvent(event: any) {
    this.tempEvent = event;

  }

  saveEvent() {
    this.http.put(`http://localhost:8080/event/update-event`, this.tempEvent)
      .subscribe((data) => {
        this.toastService.triggerAlertSuccess('Event updated successfully!');
        this.loadEvents();
      },
      (error) => {
        this.toastService.triggerAlertWarning('An error occurred while updating the event. Please try again.');
        console.error('Error occurred while updating event:', error);
      }
    );
  }

}
