import { CommonModule, NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-event-setting',
  standalone: true,
  imports: [FormsModule, CommonModule, NgFor],
  templateUrl: './all-event-setting.component.html',
  styleUrl: './all-event-setting.component.css'
})
export class AllEventSettingComponent implements OnInit{
  public eventList: any[] = [];    // Explicitly define as an array
  public tempEvent: any = {};      // Initialize as an empty object

  constructor(
    private router: Router,
    private http: HttpClient
  ) {}

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
        alert('Event deleted successfully');
        this.loadEvents();
      });
  }

  updateEvent(event: any) {
    this.tempEvent = { ...event };
  }

  saveEvent() {
    this.http.put(`http://localhost:8080/event/update-event`, this.tempEvent)
      .subscribe(() => {
        alert('Event updated successfully');
        this.loadEvents();
      });
  }
}
