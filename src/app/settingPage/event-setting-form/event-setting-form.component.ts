import { CommonModule, NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-setting-form',
  standalone: true,
  imports: [NgFor, CommonModule, FormsModule],
  templateUrl: './event-setting-form.component.html',
  styleUrl: './event-setting-form.component.css'
})
export class EventSettingFormComponent implements OnInit {
  constructor(private http: HttpClient, private authService: AuthService, private router: Router) { }

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
        alert('Event deleted successfully');
        this.loadEvents();
      })
  }

  public tempEvent: any = {}
  updateEvent(event: any) {
    this.tempEvent = event;

  }

  saveEvent() {
    this.http.put(`http://localhost:8080/event/update-event`, this.tempEvent)
      .subscribe((data) => {
        alert('Event updated successfully');
        this.loadEvents();
      })
  }

}
